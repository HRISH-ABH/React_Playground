import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [newTodo, setnewTodo] = useState("");

  return (
    <div className="w-full max-w-md mx-auto mt-6 p-4 rounded-lg bg-zinc-900 shadow">
  <div className="flex gap-3 items-center">
    <input
      value={newTodo}
      onChange={(e) => {
        setnewTodo(e.target.value);
        console.log(e.target.value);
      }}
      className="flex-1 px-4 py-2 rounded-md border border-zinc-300 bg-white text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      type="text"
      placeholder="New Todo"
    />
    <button
      onClick={() => {
        if (!newTodo.trim()) {
          alert("Please enter a todo before adding!");
          return;
        }
        addTodo(newTodo);
        console.log(newTodo);
        setnewTodo("");
      }}
      className="px-6 py-2 font-semibold rounded-md bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition cursor-pointer shadow-sm"
    >
      Add
    </button>
  </div>
</div>

  );
};

export default TodoInput;
