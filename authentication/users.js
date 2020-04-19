const bcrypt = require('bcrypt');
const xss = require('xss');

const badPasswords = require('./bad-passwords');

const {
  isInt,
  isEmpty,
  isNotEmptyString,
  isString,
  toPositiveNumberOrDefault,
  lengthValidationError,
} = require('../utils/validation');
const { query, conditionalUpdate } = require('../utils/db');

const {
  BCRYPT_ROUNDS: bcryptRounds = 11,
} = process.env;


module.exports = {
  validateUser,
  comparePasswords,
  findByUsername,
  findById,
  createUser,
  updateUser,
};
