const prisma = require('../db');

async function getAllTodos(req, res) {
    const todos = await prisma.todo.findMany();
    res.json(todos);
}

async function createTodo(req, res) {
    const todo = await prisma.todo.create({
        data: {
            title: req.body.title,
            completed: false
        }
    });
    res.json(todo);
}

async function toggleCompleted(req, res) {
    const todo = await prisma.todo.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    });
    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(req.params.id)
        },
        data: {
            completed: !todo.completed
        }
    });
    res.json(updatedTodo)
}

module.exports = {
    getAllTodos,
    createTodo,
    toggleCompleted
};

