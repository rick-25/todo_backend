const express = require('express');

const api = express.Router();
const Todo = require('../models/TodoModel');


api.route("/todo")
    .get(async (req, res) => {
        const queryres = await Todo.find({});
        res.send(queryres);
    })
    .post(async (req, res) => {
        if (req.query.id && req.query.id.length > 0) {
            try {
                await Todo.findByIdAndUpdate(req.query.id, req.body);
                console.log(req.body, req.query.id);
                res.send("Item updated!");
            } catch (error) {
                res.status(500).send(error);
            }
        } else {
            const document = new Todo({...req.body, completed: false});
            try {
                await document.save();
                res.send(document);
            } catch (error) {
                res.status(500).send(error);
            }
        }

    })
    .delete(async (req, res) => {
        try {
            const todo = await Todo.findByIdAndDelete(req.query.id);
            if (!todo) res.status(404).send("No item found");
            else res.send("Item deleted!");
        } catch (error) {
            res.status(500).send(error);
        }
    });



module.exports = {
    api,
};
