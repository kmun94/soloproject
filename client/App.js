import React, { useState, useEffect } from "react";
//import app from "../server/server";
import "./App.css";
import axios from "axios";

//Importing components//
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  //STATE MANAGEMENT//
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

 //USE EFFECT//
  useEffect(() => {
    getLocalTodos();
      // axios
      // .get("/todos")
      // .then((res) => setTodos(res.data))
      // .catch((err) => console.log("Error fetching from the server " + err));
  }, []);
  
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //FUNCTIONS//
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //SAVE TO LOCAL//
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get("/test")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("Error fetching from the server " + err));
  // }, []);
  // useEffect(() => {

  // })

  return (
    <div className="App">
      <header>
        <h1>Your Mom's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
