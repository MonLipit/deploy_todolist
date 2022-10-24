import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  let data = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(data);

  const [isFiltered, setIsFiltered] = useState(false);

  const [lang, setLang] = useState("en");

  const submitTask = (newTask) => {
    let date = new Date(new Date());
    date.setDate(date.getDate() + 1);
    setTasks([...tasks, { title: newTask, isCompleted: false, date }]);
  };

  const changeStatus = (index) => {
    const tasksClone = [...tasks];
    tasksClone[index].isCompleted = !tasksClone[index].isCompleted;
    setTasks([...tasksClone]);
  };

  const filter = (status) => {
    console.log(222);

    setIsFiltered(status);
  };

  const changeLanguage = (lang) => {
    setLang(lang);
  };

  const saveData = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const sort = (index, type) => {
    setIsFiltered(false);
    const tasksClone = [...tasks];
    const task = tasksClone[index];
    if (type === "up") {
      if (index === 0) {
        return;
      }
      tasksClone.splice(index, 1);
      tasksClone.splice(index - 1, 0, task);
    } else {
      if (index === tasks.length - 1) {
        return;
      }

      tasksClone.splice(index + 2, 0, task);
      tasksClone.splice(index, 1);
    }
    setTasks(tasksClone);
  };

  useEffect(() => {
    saveData();
  });

  return (
    <div className="App">
      <div className="todo-item-container">
        {isFiltered ? (
          <FaRegCheckCircle
            color="#9a9a9a"
            className="item-done-button"
            onClick={() => filter(false)}
          />
        ) : (
          <FaRegCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => filter(true)}
          />
        )}
        <div className="item-title">
          {lang === "vi"
            ? "Chỉ xem công việc chưa hoàn thành"
            : "Not finished only"}
        </div>
      </div>
      <div className="container">
        <TodoListHeader lang={lang} tasks={tasks} />
        <TodoList
          lang={lang}
          tasks={tasks}
          isFiltered={isFiltered}
          changeStatus={changeStatus}
          sort={sort}
        />
        <Form lang={lang} submitTask={submitTask} />
      </div>
      <Footer lang={lang} changeLanguage={changeLanguage} />
    </div>
  );
};
