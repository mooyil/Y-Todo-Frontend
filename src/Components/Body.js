import React from "react";
import "../Css/Body.css";

export default function Body() {
  const [hello, setHello] = React.useState([]);
  const [todoList, setTodoList] = React.useState("");

  function add() {
    if(todoList === "") {
      alert("Kein Todo vorhanden")
    } else {
      setHello([...hello, <li className="list-items" key={hello}>{todoList}</li>]);
      setTodoList("");
    }
  }

  React.useEffect(() => {
    const enter = event => {
      console.log("hey")

      if(event.key === "Enter"){
        
        add()
      }
    }
    document.addEventListener("keypress", enter)

    return () => {
      document.removeEventListener("keypress" ,enter)
    }
  })

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
        <ul className="todo-list">{hello}</ul>
      </div>
    </div>
  );
}
