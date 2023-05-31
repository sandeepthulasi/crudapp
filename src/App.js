import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [title,setTitle]=useState("");
  const[desc,setDesc]=useState('');
  let [editTodo,setEditTodo]=useState(false);
  let [index,setIndex]=useState(0)
  let onDelete=(todo)=>{
    setTodos(todos.filter(e=>e!==todo))
  }

 
  let onEdit=(todo)=>{
    setTitle(todo.title);
    setDesc(todo.desc);
    setEditTodo(true);
     setIndex(parseInt(todos.indexOf(todo)))
   
  } 

  let updateTodo=(title,desc)=>{
    let todoscopy=JSON.parse(JSON.stringify(todos));
    todoscopy[index].sno=index+1;
    todoscopy[index].title=title;
    todoscopy[index].desc=desc;
    setTodos(todoscopy);
    setEditTodo(false);
  }
  var addtodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno=todos[todos.length-1].sno+1;
    }
    let myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  
  }

  
let [todos,setTodos]=useState([]);
  return (
<>

<AddTodo addtodo={addtodo} updateTodo={updateTodo} title={title} setTitle={setTitle} desc={desc}  setDesc={setDesc} editTodo={editTodo} setEditTodo={setEditTodo}/>
<Todos todos={todos} onEdit={onEdit} onDelete={onDelete}/>
</>
  );
}

export default App;