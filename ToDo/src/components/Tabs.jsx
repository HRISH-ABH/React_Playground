import React from "react";

const Tabs = ({ todos,setTab }) => {
 const tabs=["All","Completed","Ongoing"];
  return (
    <nav className="w-full  flex justify-center gap-10 text-xl mt-4">
      {tabs.map((tab, index) => {
        const numOfTasks =
          tab == "All"
            ? todos.length
            : tab == "Completed"
            ? todos.filter((todo) => todo.completed).length
            : tab == "Ongoing"
            ? todos.filter((todo) => !todo.completed).length
            :0;
        return (
          <button onClick={()=>{setTab(tab)}} className="px-4 py-1 bg-blue-500 rounded-md cursor-pointer" key={index}>
            <h3 className=" text-sm font-semibold">
              {tab} <span className="text-xs text-gray-800">({numOfTasks})</span>
            </h3>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
