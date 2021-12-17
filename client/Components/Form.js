import React, { useEffect } from 'react';
import axios from "axios";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus } ) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    // axios
    // .post("/todos", {
    //     text: inputText, 
    //     completed: false, 
    //   }) 
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("Error fetching from the server " + err));
    setTodos([
      ...todos,
      { 
        id: Math.random() * 1000,
        text: inputText, 
        completed: false, 
        },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
    return(
      <form>
        <input 
        value={inputText} 
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" 
        />
        <button 
        onClick={submitTodoHandler} 
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