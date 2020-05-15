const xss = require('xss');

const {
  isInt,
  isNotEmptyString,
} = require('../utils/validation');

const { query, pagedQuery } = require('../utils/db');
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

async function changeUsername(req, res) {
  const { id, name } = req.body;
  const errors = [];
  if (!isInt(id)) {
    errors.push('Id þarf að vera tala');
  }
  const user = await query(`
  SELECT *
  FROM users           
  WHERE id = $1`, [id]);

  if (!user) {
    errors.push('Notandi ekki til');
  }
  if (!isNotEmptyString(name)) {
    errors.push('Ekki valid nafn');
  }
  if (errors.length > 0) {
    return res.json(errors);
  }
  const q = `
  UPDATE users
  SET username = $1           
  WHERE id = $2
  RETRUNING username`;
  const result = query(q, [xss(name), xss(id)]);
  return res.json(result);
}

async function deleteUser(req, res) {
  const { id } = req.params;
  const errors = [];
  if (!isInt(id)) {
    errors.push('Id þarf að vera tala');
  }
  const user = await query(`
    SELECT username 
    FROM users
    WHERE id = $1
    `, [id]);
  if (!user) {
    errors.push('User með id: '.concat(id));
  }

  await query(`
  DELETE 
  FROM users
  WHERE id = $1
  `, [id]);
  return res.json('Notandi með id '.concat(id).concat('Hefur verið eytt'));
}

module.exports = {
  listUsers,
  changeUsername,
  deleteUser,
};
