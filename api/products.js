const xss = require('xss');

const { query } = require('../utils/db');
const { isInt } = require('../utils/validation');

async function getProducts(req, res) {
  const products = await query(
    `SELECT
      id, title, price, description, category_id
    FROM
      products
    ORDER BY 
      category_id ASC,
      title asc`, [],
  );

  return res.json(products.rows);
}

async function getProductById(req, res) {
  const { id } = req.params;
  if (!isInt(id)) {
    return res.status(400).json({ error: 'Ekki valid tala' });
  }

  const q = `
  SELECT
    title, price, description, category_id
  FROM
    products
  WHERE id = $1`;
  const result = await query(q, [xss(id)]);
  return res.json(result.rows);
}


module.exports = {
  getProducts,
  getProductById,
};
