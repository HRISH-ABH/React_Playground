import React from "react";

const Header = ({ todos }) => {
  const todoLength = todos.filter((todo)=>!todo.completed).length;
  return (
    <div className="w-full text-2xl text-center">
      You have <span>{todoLength}</span> Pending{" "}
      {todoLength > 1 ? "Tasks" : "Task"}!
    </div>
  );
};

export default Header;
