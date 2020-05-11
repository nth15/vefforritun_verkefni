function isEmpty(s) {
  return s != null && !s;
}

function isInt(i) {
  // eslint-disable-next-line no-restricted-globals
  return !isNaN(i) && Number.isInteger(Number(i));
}

function isString(s) {
  return typeof s === 'string';
}

function isNotEmptyString(s) {
  return !isEmpty(s) && isString(s);
}

function lengthValidation(s, min, max) {
  return isNotEmptyString(s) && s.length > min && s.length < max;
}

function toPositiveNumberOrDefault(value, defaultValue) {
  const cast = Number(value);
  const clean = Number.isInteger(cast) && cast > 0 ? cast : defaultValue;

  return clean;
}

module.exports = {
  isEmpty,
  isInt,
  isString,
  isNotEmptyString,
  lengthValidation,
  toPositiveNumberOrDefault,
};
