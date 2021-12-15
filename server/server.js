const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

//REQUIRE ROUTER//
const apiRouter = require("./api");
const todoController = require("./controllers/todosController");

app.use(express.json()); // => req.body
app.use(express.urlencoded({ extended: true }));

//ROUTER HANDLER//
app.use("/todos", apiRouter);

//test route
app.use("/test", (req, res) => {
  return res.send("hello from 3000");
});

//STATIC//
app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../dist/index.html"));
});


// catch-all route handler for any requests to an unknown route//
app.use((req, res) => {
  console.log("404 error triggered");
  res.sendStatus(404);
});

//configure express global error handler//
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

// module.exports = app;
