const { validator } = require('validator');

function normalizeEmail(s) {
  return validator.normalizeEmail(s);
}

function trim(s) {
  return validator.trim(s);
}

function escape(s) {
  return validator.escape(s);
}

module.exports = {
  normalizeEmail,
  trim,
  escape,
};
