const xss = require('xss');

const {
  isInt,
  isNotEmptyString,
} = require('../utils/validation');

const { query } = require('../utils/db');

async function validateProduct(title, price, description, category) {
  const errors = [];

  if (!isNotEmptyString(title)) {
    errors.push('Titill má ekki vera tómt');
  }
  if (!isInt(price)) {
    errors.push('Price þarf að vera tala');
  }
  if (!isNotEmptyString(description)) {
    errors.push('Description ekki valid strengur');
  }
  if (!isInt(category)) {
    errors.push('Category id þarf að vera tala');
  }
  const cat = await query(
    `SELECT
      *
    FROM
      categories
      WHERE id = $1
    ORDER BY 
      category_id ASC,
      title asc`, [category],
  );
  if (cat) {
    errors.push('Category id ekki til');
  }
  return errors;
}

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

async function addProduct(req, res) {
  const { title, price, description, category } = req.body;

  let val = [];
  val = validateProduct(title, price, description, category);
  if (val.length > 0) {
    return res.json(val);
  }

  const q = `
  INSERT INTO
    products (title, price, description, category)
  VALUES
    ($1, $2, $3, $4)
  RETURNING id, title price description, category`;
  const values = [xss(title), xss(price), xss(description), xss(category)];

  const result = await query(
    q,
    values,
  );

  return res.json(result.rows);
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
};
