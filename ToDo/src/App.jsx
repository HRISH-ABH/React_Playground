import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [tab, setTab] = useState("All");
  const [todos, setTodos] = useState([
    { input: "Hello1 Add your first todo", completed: false },
    { input: "Hello2 Add your first todo", completed: false },
    { input: "Hello3 Add your first todo", completed: false },
    { input: "Hello4 Add your first todo", completed: false },
    { input: "Hello4 Add your first todo", completed: true },
    { input: "Hello2 Add your first todo", completed: false },
    { input: "Hello3 Add your first todo", completed: false },
    { input: "Hello4 Add your first todo", completed: false },
    { input: "Hello4 Add your first todo", completed: true },
  ]);

  const markComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === idx) {
        return { ...todo, completed: true }; //all details of the old obj + the modified field
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (idx) => {
    setTodos(
      todos.filter((todo, index) => {
        return index !== idx;
      })
    );
  };

  const tabHandler = (tab) => {
    setTab(tab);
  };
  const addTodo = (todo) => {
    setTodos([...todos, { input: todo, completed: false }]);
  };

  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Header todos={todos} />
      <Tabs setTab={tabHandler} todos={todos} />
      <TodoList
        todos={todos}
        tab={tab}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default App;
