import React from 'react';

const Form = ({ setInputText, inputText, todos, setTodos, setStatus } ) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      //Go back and add another column, completed to the database.  
      { 
        id: Math.floor(Math.random() * 10000),
        text: inputText, 
        completed: false, 
        },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  //FETCH REQUEST
    return(
      <form>
        <input 
        value={inputText} 
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" 
        />
        <button 
        onClick={() => submitTodoHandler()} 
        className="todo-button" 
        type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select 
          onChange={statusHandler} 
          name="todos" 
          className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;