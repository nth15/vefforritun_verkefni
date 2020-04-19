const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy, ExtractJwt } = require('passport-jwt');

const users = require('./users');

const {
  isNotEmptyString,
  toPositiveNumberOrDefault,
} = require('../utils/validation');
const catchErrors = require('../utils/catchErrors');

const app = express();
app.use(express.json());

const defaultTokenLifetime = 60 * 60 * 24 * 7; // 7 dagar

const {
  JWT_SECRET: jwtSecret,
  JWT_TOKEN_LIFETIME: tokenLifetimeFromEnv,
} = process.env;

const tokenLifetime = toPositiveNumberOrDefault(
  tokenLifetimeFromEnv,
  defaultTokenLifetime,
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

app.post('/users/register', catchErrors(registerRoute));
app.post('/users/login', catchErrors(loginRoute));

module.exports = app;
module.exports.requireAuth = requireAuth;
module.exports.checkUserIsAdmin = checkUserIsAdmin;
