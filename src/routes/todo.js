const Router = require("express").Router;
const TodoController = require("../controllers/todo");

const TodoRoutes = Router();

const ROUTE_PREFIX = "api";

TodoRoutes.get(`/${ROUTE_PREFIX}/todos`, TodoController.getAllTodos);
TodoRoutes.post(`/${ROUTE_PREFIX}/todos`, TodoController.createTodo);
TodoRoutes.put(`/${ROUTE_PREFIX}/todo/:id`, TodoController.toggleCompleted);

module.exports = TodoRoutes;
