// require express and it's router component
const express = require('express');
const path = "/expenses";

const router = express.Router();

// require the middlewares and callback functions from the controller directory
const {
    create,
    expenseById,
    read,
    update,
    remove,
    expenseByDate,
} = require('../controllers');

// Create POST route to create an expense
router.post(path + "/", create);

// Create GET route to read an expense
router.get(path + "/:id", expenseById, read);

// Create PUT route to update an expense
router.put(path + "/:id", expenseById, update);

// Create DELETE route to remove an expense
router.delete(path + "/:id", remove);

// Create GET route to read a list of expenses
router.get(path + "/", expenseByDate, read);

module.exports = router;
