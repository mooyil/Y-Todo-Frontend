import React from "react";
import "../Css/Body.css";

export default function Body() {
  //States in der todoList wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoList, setTodoList] = React.useState([]);

  //Todo zur Ul hinzufügen Funktion
  function add() {
    if (todoList === "") {
      alert("Kein Todo vorhanden");
    } else {
      setTasks([
        ...tasks,
        <li id={Math.random () * 10000} className="list-items" key={tasks}>
          {todoList}
          <button>❌</button>
        </li>,
      ]);
      console.log(tasks.id)

      setTodoList("");
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

  return (
    <div className="container-body">
      <div className="input-wrapper">
        <input
          value={todoList}
          onChange={(event) => setTodoList(event.target.value)}
          type="text"
          className="input-text"
        />
        <button onClick={add} className="input-button">
          Add
        </button>
      </div>
      <div className="list-wrapper">
        <ul className="todo-list">{tasks}</ul>
      </div>
    </div>
  );
}

