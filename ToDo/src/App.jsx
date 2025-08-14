import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

const App = () => {
  const DEFAULT_TODOS = [
    { input: "Hello1 Add your first todo", completed: false },
  ];
  const getInitialTodos = () => {
    try {
      const saved = localStorage.getItem("todo-app");
      return saved ? JSON.parse(saved) : DEFAULT_TODOS;
    } catch {
      return DEFAULT_TODOS;
    }
  };

  const [tab, setTab] = useState("All");
  const [todos, setTodos] = useState(getInitialTodos);

  const markComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (idx) => {
    let newTodos = todos.filter((todo, index) => {
      return index !== idx;
    });
    setTodos(newTodos);
  };

  const tabHandler = (tab) => {
    setTab(tab);
  };
  const addTodo = (todo) => {
    let updatedtodos = [...todos, { input: todo, completed: false }];
    setTodos(updatedtodos);
  };

  useEffect(() => {
    localStorage.setItem("todo-app", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full h-screen bg-zinc-900 text-white flex flex-col ">
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
