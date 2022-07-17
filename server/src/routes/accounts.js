const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

const groupIdSchema = joi.object({
  id: joi.number().required(),
});

// POST

router.post('/accounts', isLoggedIn, async (req, res) => {
  const { id } = req.body;
  try {
    await groupIdSchema.validateAsync({ id });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    // checking if user is already in the group
    const [rows] = await connection.query(
      `SELECT * FROM accounts WHERE user_id=${req.userId} AND group_id=${id}`,
    );
    if (rows.length > 0) {
      return res.status(400).json({
        status: 'Bad Request!',
        error: 'You are already a member of this group!',
      });
    }
    const [response] = await connection.query('INSERT INTO accounts SET ?', {
      group_id: id,
      user_id: req.userId,
    });
    await connection.end();
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET /accounts

router.get('/accounts', isLoggedIn, async (req, res) => {
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [rows] = await connection.query(
      `SELECT accounts.id,  group_id, groups.name, users.full_name from accounts 
        JOIN exam.groups ON accounts.group_id=groups.id 
        JOIN users ON accounts.user_id=users.id WHERE user_id = ${req.userId}`,
    );
    await connection.end();
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
