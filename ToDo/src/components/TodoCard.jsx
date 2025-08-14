import React from "react";

const TodoCard = ({ todo, todoIdx ,markComplete,deleteTodo}) => {
  return (
    <div className=" h-30 w-full bg-zinc-300 px-2 py-1 mb-3 text-black rounded-md relative">
      <p className="text-lg font-mono ">{todo.input}</p>
      <h3 className="mb-2 font-thin">
        {todo.completed ? "Completed" : "Ongoing"}
      </h3>

      <div className="flex gap-4 mt-4 absolute bottom-0 translate-y-[50%]">
        <button
        onClick={()=>{markComplete(todoIdx)}}
          disabled={todo.completed}
          className={`${
            todo.completed ? "bg-blue-100" : "bg-blue-400"
          } rounded-md px-3 py-1 text-sm cursor-pointer`}
        >
          done
        </button>
        <button onClick={()=>{deleteTodo(todoIdx)}} className="bg-blue-300 rounded-md px-3 py-1 text-sm cursor-pointer">
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
