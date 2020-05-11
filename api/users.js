const {
  validateUser,
  updateUser,
  findById,
} = require('../authentication/users');

const { query, pagedQuery } = require('../utils/db');
const { isBoolean } = require('../utils/validation');
const addPageMetadata = require('../utils/addPageMetadata');

async function listUsers(req, res) {
  const { offset = 0, limit = 10 } = req.query;

  const users = await pagedQuery(
    `SELECT
      id, username, email, admin, created, updated
    FROM
      users
    ORDER BY updated DESC`,
    [],
    { offset, limit },
  );

  const usersWithPage = addPageMetadata(
    users,
    req.path,
    { offset, limit, length: users.items.length },
  );

  return res.json(usersWithPage);
}

module.exports = {
  listUsers,
};
