const { query } = require('../utils/db');

async function getProducts(req, res) {
  const products = await query(
    `SELECT
      title, price, description, category_id
    FROM
      products
    ORDER BY 
      category_id ASC,
      title asc`, [],
  );

  return res.json(products.rows);
}

async function getProductById(req, res) {
  const id = req;
  const products = await query(
    `SELECT
      title, price, description, category_id
    FROM
      products
    Where id = $1
    ORDER BY 
      category_id ASC,
      title asc`, [id],
  );

  return res.json(products.rows);
}

module.exports = {
  getProducts,
  getProductById,
};
