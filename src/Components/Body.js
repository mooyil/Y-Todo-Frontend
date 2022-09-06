import React from "react";
import "../Css/Body.css";
import axios from "axios"

export default function Body() {
  //States in der todoInputValue wird der Value vom input gespeichert und danach bei Tasks gespeichert
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, settodoInputValue] = React.useState("");

  let todoItem = {
    content: todoInputValue,
    userId: "mikail",
    done: false
  }

  //GET Method vom Server
  React.useEffect(() => {
    axios.get("http://localhost:8087/todo/get?username=mikail")
    .then((response) => {
    setTasks(response.data)
    })
  }, []);

  function createPost () { 
    fetch(`http://localhost:8087/todo/add`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(todoItem)
    }).then(response => response.json())
    .then((todoItem) => { 
      setTasks([...tasks].concat(todoItem));
    })
    }
    

    function deleteFromServer (id) { 
      fetch("http://localhost:8087/todo/delete?todoItemId="+id,
       { 
         method: "DELETE",
      }
       ).then(response => {
          // console.log(response.status);
         });
     }
  
  console.log(tasks)

  //Todo zur Ul hinzufügen Funktion
  //TODO: Guck dir das genauer an
  function add(event) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      content: todoInputValue,
    };
    if (todoInputValue === "") {
      alert("Bitte schreiben Sie ein Todo");
    } else {
      // setTasks([...tasks].concat(newTodo));
      settodoInputValue("");
    }
  }

  //Enter Funktion
  React.useEffect(() => {
    const enter = (event) => {
      if (event.key === "Enter") {
        add();
        createPost();
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
        <button onClick={() => {
          add()
          createPost()
        }} className="input-button">
          Add
        </button>
      </div>
      <div className="list-wrapper">
        {tasks.map((todo) => {
          return (
            <li className="list-items" key={todo.id}>
              {todo.content}
              <button onClick={() => {
                deleteTodo(todo.id)
                deleteFromServer(todo.id)
                }}>delete</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
