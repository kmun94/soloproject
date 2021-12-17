import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
   return (
    <div className="todo-container">
      <ul className ="todo-list">
        {filteredTodos.map((todo, i) => (
          <Todo 
          setTodos={setTodos}
          todos={todos}
          key={i} 
          key={todo}
          todo={todo}
          text={todo.text}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;