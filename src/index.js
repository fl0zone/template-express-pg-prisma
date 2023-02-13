const express = require("express");
const bodyParser = require("body-parser");
const TodoRouter = require("./routes/todo");

const app = express();

app.use(bodyParser.json());

app.use(TodoRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`)
});
