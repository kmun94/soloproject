const pool = require('../db');

const todoController = {};

//GET ALL TODO//
todoController.getAllTodo = async (req, res, next) => {
  try {
  const allTodo = await pool.query(
      'SELECT * from todo'
    );
    res.locals.todo = allTodo.rows;
    return next();
  } catch (err) {
    console.error(err.message);
  };
};

//GET SPECIFIC TODO//
todoController.getTodo = async (req, res, next) => {
  try {
  const { id } = req.params;
  const getTodo = await pool.query(
      'SELECT * FROM todo WHERE todo_id = $1', [id]
    );
    res.locals.todo = getTodo.rows[0];
    return next();
  } catch (err) {
    console.error(err.message);
  };
};

//CREATE TODO//
todoController.createTodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
        'INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]
    );
    res.locals.todo = newTodo.rows[0];
    return next();
    } catch (err) {
    console.error(err.message)
  };
};

//UPDATE A TODO//
todoController.updateTodo = async (req, res, next) => {
  try {
   const { id } = req.params;
   const { description } = req.body;
   const updateTodo = await pool.query(
     'UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]
   );
   res.json("Todo was successfully updated");
  } catch (err) {
    console.error(err.message);
  };
};
  
//DELETE A TODO//
todoController.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      'DELETE FROM todo WHERE todo_id = ($1);', [id] 
    );    
    res.json("Todo was successfully deleted");
  } catch (err) {
    console.error(err.message)
  };
};


module.exports = todoController;
