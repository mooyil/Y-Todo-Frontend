// import { modalStyle, modalCloseIconStyle } from "../styles/ListStyles";
// import { Box, TextField, IconButton } from "@mui/material";
// import { OwnButton } from "../styles/ListStyles";
// import { Modal } from "@mui/joy";
// import { Close } from "@mui/icons-material";

// export default function ListItemModal ({tasks, setTasks, updatedInputValue, setUpdatedInputValue, open, setOpen, setUpdatedTodo }) {

//     function editIt(id) {
//         const updatedTodo = [...tasks].map((todo) => {
//           if (todo.id === id) {
//             todo.content = updatedInputValue;
//           }
//           return todo;
//         });
//         setTasks(updatedTodo);
//         setUpdatedTodo([]);
//         setUpdatedInputValue("")
//         setOpen(false)
//       }

// console.log(todo)
//     return (
//         <Modal
//         keepMounted
//         open={open}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <TextField
//             label="Update todo..."
//             sx={{ backgroundColor: "white", width: 400, mt: 7}}
//             onChange={(event) =>
//               setUpdatedInputValue(event.target.value)
//             }
//             type="text"
//           />
//           <OwnButton
//           variant="contained"
//             sx={{ color: "white", height: 50, mt:1 }}
//             onClick={() => editIt(todo.id)}
//           >
//             Update
//           </OwnButton>
//           <IconButton style={modalCloseIconStyle} onClick={() => setOpen(false)}>
//             <Close/>
//           </IconButton>
//         </Box>
//       </Modal>
//     )
//  }

<ul>
  {tasks.map((todo) => {
    return (
      <div>
        {todo.id === updatedTodo ? (
          <input
            value={updatedInputValue}
            onChange={(event) => setUpdatedInputValue(event.target.value)}
          ></input>
        ) : (
          <p>{todo.content}</p>
        )}

        <button onClick={() => setUpdatedTodo(todo.id)}>edit</button>
        <button onClick={() => editIt(todo.id)}>submit edits</button>
      </div>
    );
  })}
</ul>;

//<Modal
//                   keepMounted
//                   open={open}
//                   aria-labelledby="keep-mounted-modal-title"
//                   aria-describedby="keep-mounted-modal-description"
//                 >
//                   <Box sx={modalStyle}>
//                     <TextField
//                     value={updatedInputValue}
//                       label="Update todo..."
//                       sx={{ backgroundColor: "white", width: 400, mt: 7 }}
//                       onChange={(event) =>
//                         setUpdatedInputValue(event.target.value)
//                       }
//                       type="text"
//                     />
//                     <OwnButton
//                       variant="contained"
//                       sx={{ color: "white", height: 50, mt: 1 }}
//                       onClick={() => editIt(todo.id)}
//                     >
//                       Update
//                     </OwnButton>
//                     <IconButton
//                       style={modalCloseIconStyle}
//                       onClick={() => setOpen(false)}
//                     >
//                       <Close />
//                     </IconButton>
//                   </Box>
//                 </Modal>
