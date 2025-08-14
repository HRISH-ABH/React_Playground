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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 p-2 bg-zinc-900 overflow-y-auto max-h-[62vh]">
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
