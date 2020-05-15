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
  deleteUser,
  changeUsername,
} = require('./users');

const {
  listAllOrders,
  getOrders,
} = require('./orders');

const {
  getProducts,
  getProductById,
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
      productsbyid: '/products/:id',
    },
    orders: {
      orders: '/orders',
      ordersall: '/orders/all',
    },
  });
}

router.get('/', indexRoute);

router.get('/users', requireAdmin, catchErrors(listUsers));
router.post('/users/changeusername', requireAdmin, catchErrors(changeUsername));
router.delete('/users/:id', requireAdmin, catchErrors(deleteUser));


router.get('/orders/all', requireAdmin, catchErrors(listAllOrders));
router.get('/orders', requireAuthentication, catchErrors(getOrders));

router.get('/products', catchErrors(getProducts));
router.get('/products/:id', catchErrors(getProductById));

module.exports = router;
