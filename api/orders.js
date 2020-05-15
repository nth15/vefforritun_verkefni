const xss = require('xss');
const { query, pagedQuery } = require('../utils/db');
const addPageMetadata = require('../utils/addPageMetadata');

async function listAllOrders(req, res) {
  const { offset = 0, limit = 10 } = req.query;

  const orders = await pagedQuery(
    `SELECT
      id, name, totalPrice created, updated
    FROM
      orders
    ORDER BY updated DESC`,
    [],
    { offset, limit },
  );

  const ordersWithPage = addPageMetadata(
    orders,
    req.path,
    { offset, limit, length: orders.items.length },
  );

  return res.json(ordersWithPage);
}

async function getOrders(req, res) {
  const { offset = 0, limit = 10 } = req.query;
  const user = req;

  const q = `
  Select 
    id, totalPrice, created
  FROM
    orders
  WHERE user_id = $1
  ORDER BY created DESC`;

  const orders = await pagedQuery(q, [user.id], { offset, limit });

  const ordersWithPage = addPageMetadata(
    orders,
    req.path,
    { offset, limit, length: orders.items.length },
  );

  return res.json(ordersWithPage);
}

async function createOrder(req, res) {
  const { name, totalPrice } = req.body;
  const q = `
  INSERT INTO
    orders (name, totalPrice)
  VALUES
    ($1, $2)
  RETURNING id, name, totalPrice`;

  const values = [xss(name), xss(totalPrice)];
  const result = await query(
    q,
    values,
  );
  return res.json(result.rows);
}

module.exports = {
  listAllOrders,
  getOrders,
  createOrder,
};
