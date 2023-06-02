import React from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import "./TodoList.css";

function TodoList({ todos: todo, setTodos }) {
  const updateTask = (id) => {
    let updatedTasks = todo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTasks);
  };

  const calcNumberOfIncompletedTasks = () => {
    let count = 0;
    todo.forEach((todo) => {
      if (!todo.completed) count++;
    });
    return count;
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          {todo.map((todo, index) => (
            <div
              className={`todo-item ${todo.completed && "todo-item-active"}`}
              onClick={() => updateTask(todo.id)}
            >
              {todo.task}
            </div>
          ))}
        </div>
      </div>
      <div>
        <TodoFooter numberOfIncompleteTasks={calcNumberOfIncompletedTasks()} />
      </div>
    </div>
  );
}

export default TodoList;
