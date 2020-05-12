const bcrypt = require('bcrypt');
const xss = require('xss');

const {
  isInt,
  lengthValidation,
  isEmpty,
  isEmail,
} = require('../utils/validation');
const { query } = require('../utils/db');

const {
  BCRYPT_ROUNDS: bcryptRounds = 11,
} = process.env;

const badPasswords = require('./badPasswords');

/**
 *
 * @param  {String} username
 * @return {user} If exists returns user
 *                If !exists returns null
 */
async function findByUsername(username) {
  const q = `
    SELECT
      id, username, password, email, admin
    FROM
      users
    WHERE username = $1`;
  const result = await query(q, [username]);

  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
}

/**
 *
 * @param  {String} username
 * @param  {String} password
 * @return {array}  If valid return empty array
 *                  If not empty returns errors
 */
async function validateUser(username, password, email) {
  const errors = [];
  if (!lengthValidation(username, 6, 30)) {
    errors.push('Notendanafn þarf að vera 6-20 stafir');
  }

  const user = await findByUsername(username);

  if (user) {
    errors.push('Notendanafn er þegar skráð');
  }
  if (!lengthValidation(password, 6, 32)) {
    errors.push('Lykilorð verður að vera 6-32 stafir');
  }
  if (badPasswords.includes(password)) {
    errors.push('Ekki nógu gott lykilorð');
  }
  if (isEmpty(email)) {
    errors.push('Email má ekki vera tómt');
  }
  if (!isEmail(email)) {
    errors.push('Ekki alvöru email');
  }

  return errors;
}

/**
 *
 * @param  {*} password
 * @param  {*} hash
 * @return {boolean} True if passwords match
 *                   False if they don't match
 */
async function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}

/**
 *
 * @param  {string} id
 * @return {user} If exists returns user
 *                If !exists returns null
 */
async function findById(id) {
  if (!isInt(id)) {
    return null;
  }
  const q = `
    SELECT
      id, username, password, email, admin
    FROM
      users
    WHERE id = $1`;
  const result = await query(q, [id]);

  if (result.rowCount === 1) {
    return result.rows[0];
  }

  return null;
}

async function createUser(username, password, email) {
  const hashedPassword = await bcrypt.hash(password, bcryptRounds);

  const q = `
  INSERT INTO
    users (username, email, password, admin)
  VALUES
    ($1, $2, $3, $4)
  RETURNING username, email, admin, created`;

  const values = [xss(username), xss(email), hashedPassword, false];
  const result = await query(
    q,
    values,
  );
  return result.rows[0];
}

async function setAdmin(id, admin) {
  const q = `
    UPDATE users
    SET admin = $1, updated = current_timestamp
    WHERE id = $2`;

  const result = await query(q, [admin, id]);

  return result;
}

module.exports = {
  validateUser,
  comparePasswords,
  findByUsername,
  findById,
  createUser,
  setAdmin,
};
