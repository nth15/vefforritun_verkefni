const express = require('express');
const catchErrors = require('../utils/catchErrors');
const { requireAuth, checkUserIsAdmin } = require('../authentication/auth');

const requireAdmin = [
  requireAuth,
  checkUserIsAdmin,
];

const router = express.Router();

function indexRoute(req, res) {

}

router.get('/', indexRoute);

module.exports = router;
