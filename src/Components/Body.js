import React from "react";
import "../Css/Body.css";

export default function Body() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, settodoInputValue] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("todosData")) {
      setTasks(JSON.parse(localStorage.getItem("todosData")));
    }
    return () => {
      localStorage.clear();
    };
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(tasks));
  }, [tasks]);

  //Todo zur Ul hinzufügen Funktion
  function add(event) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      text: todoInputValue,
    };
    if (todoInputValue === "") {
      alert("Bitte schreiben Sie ein Todo");
    } else {
      setTasks([...tasks].concat(newTodo));
      settodoInputValue("");
    }
  }

  //Enter Funktion
  React.useEffect(() => {
    const enter = (event) => {
      if (event.key === "Enter") {
        add();
      }
    };
    document.addEventListener("keypress", enter);

    return () => {
      document.removeEventListener("keypress", enter);
    };
  });

  //Todo lösch Funktion
  function deleteTodo(id) {
    const updatedTodo = [...tasks].filter((todo) => todo.id !== id);
    console.log(tasks);
    setTasks(updatedTodo);
  }

  return (
    <div className="container-body">
      <div className="input-wrapper">
        <input
          value={todoInputValue}
          onChange={(event) => settodoInputValue(event.target.value)}
          type="text"
          className="input-text"
        />
        <button onClick={add} className="input-button">
          Add
        </button>
      </div>
      <div className="list-wrapper">
        {tasks.map((todo) => {
          return (
            <li className="list-items" key={todo.id}>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
