// require express and it's router component
const express = require('express');

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
router.post("/", create);

// Create GET route to read an expense
router.get("/:id", expenseById, read);

// Create PUT route to update an expense
router.put("/:id", expenseById, update);

// Create DELETE route to remove an expense
router.delete("/:id", remove);

// Create GET route to read a list of expenses
router.get("/list/:expenseDate", expenseByDate, read);

module.exports = router;
