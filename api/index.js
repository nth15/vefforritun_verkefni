const express = require('express');
const catchErrors = require('../utils/catchErrors');
// eslint-disable-next-line max-len
const { requireAuthentication, checkUserIsAdmin } = require('../authentication/auth');

const requireAdmin = [
  requireAuthentication,
  checkUserIsAdmin,
];

const {
  listUsers,
} = require('./users');

const {
  listAllOrders,
} = require('./orders');

const {
  getProducts,
} = require('./products');

const router = express.Router();

function indexRoute(req, res) {
  return res.json({
    users: {
      users: '/users',
      user: '/users/{id}',
      register: '/users/register',
      login: '/users/login',
      me: '/users/me',
    },
    products: {
      products: '/products',
    },
  });
}

router.get('/', indexRoute);

router.get('/users', requireAdmin, catchErrors(listUsers));

router.get('/orders/all', requireAdmin, catchErrors(listAllOrders));
//router.get('/orders', requireAuthentication, catchErrors(getOrders));
router.get('/products', catchErrors(getProducts));

module.exports = router;
