import React from "react";
import TodoCard from "./TodoCard";
const TodoList = ({ todos, tab, markComplete, deleteTodo }) => {
  const filteredTodos =
    tab == "All"
      ? todos
      : tab == "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos.filter((todo) => !todo.completed);

  return (
    <div className="flex flex-wrap gap-15 mt-4 p-2 bg-amber-500">
      {filteredTodos.map((todo, index) => {
        return (
          <div key={index}>
            <TodoCard
              todo={todo}
              todoIdx={index}
              markComplete={markComplete}
              deleteTodo={deleteTodo}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
