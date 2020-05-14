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

module.exports = {
  getProducts,
};
