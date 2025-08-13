import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setnewTodo] = useState("");

  return (
    <div className="w-full mt-5 ml-3">
      <div className="flex gap-2 justify-center">
        <input
          value={newTodo}
          onChange={(e) => {
            setnewTodo(e.target.value);
            console.log(e.target.value);
          }}
          className="text-white px-2 py-1 w-1/3 outline-orange-50"
          type="text"
          placeholder="New Todo"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            console.log(newTodo);
          }}
          className="px-6 py-1 bg-blue-500 rounded-md cursor-pointer hover:shadow-2xl"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
