const express = require('express');
const joi = require('joi');
const mysql = require('mysql2/promise');
const DB_CONFIG = require('../../config');
const isLoggedIn = require('../middleware/authorization');

const router = express.Router();

const billsSchema = joi.object({
  groupId: joi.number().required(),
  amount: joi.number().required(),
  description: joi.string().required(),
});

// GET /bills/:group_id
router.get('/bills/:id', isLoggedIn, async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [bills] = await connection.query(
      `SELECT * from bills WHERE group_id = ${Number(id)}`,
    );
    await connection.end();
    return res.json(bills);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// POST /bills
router.post('/bills', isLoggedIn, async (req, res) => {
  const { group_id: groupId, amount, description } = req.body;
  try {
    await billsSchema.validateAsync({ groupId, amount, description });
  } catch (err) {
    return res.status(400).json(err);
  }
  try {
    const connection = await mysql.createConnection(DB_CONFIG);
    const [response] = await connection.query('INSERT INTO bills SET ?', {
      group_id: groupId,
      amount,
      description,
    });
    await connection.end();
    return res.json(response);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
