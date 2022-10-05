// import React from "react";
// import { createContext } from "react";
// import { todoApiService } from "../services/todoApiService";
// import { DateTimePickerContext } from "./DateTimePickerContext";
// import { TextFeldundButtonContext } from "./TextFeldundButtonContext";

// export const ListeContext = createContext()

// export function ListeProvider (props) {
//     const { tasks, setTasks } = React.useContext(TextFeldundButtonContext);
//     const [updatedInputValue, setUpdatedInputValue] = React.useState("");
//     const [open, setOpen] = React.useState(false);
//     const [dateValue, setDateValue] = React.useContext(DateTimePickerContext);
//     const [count, setCount] = React.useState(0);
//     const [updatedTodo, setUpdatedTodo] = React.useContext([])

//    const TodoApiService = new todoApiService()
    
//   let displayedDate

//   if (dateValue != null) {
//      displayedDate = dateValue.$d.toDateString();
//   } else {
//     console.log("dateValue is null")
//   }
   
//   function editIt(id, date) {
//     const updatedTodo = [...tasks].map((todo) => {
//       if (todo.id === id) {
//         todo.content = updatedInputValue;
//         todo.date = displayedDate;
//       }
//       return todo;
//     });
//     setTasks(updatedTodo);
//     createUpdatePost(id);
//     setUpdatedTodo([]);
//     setUpdatedInputValue("");
//     setOpen(false);
//   }

  
//   let updatedTodoRequest = {
//     content: updatedInputValue,
//     date: displayedDate,
//   };

//   function createUpdatePost(id) {
//     TodoApiService.createUpdatePostService(id, updatedTodoRequest);
//   }

//     return (
//         <ListeContext.Provider value={{editIt, displayedDate}}>
//             {props.children}
//         </ListeContext.Provider>
//     )
// }