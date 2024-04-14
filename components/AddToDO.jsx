import { useState } from "react"
import Items from "./Items";

const AddToDO = ({handleAdd}) => {

  const [todo,setTodo] = useState(['']);
  const [duedate,setdue] = useState(['']);


  return (
    <div className="add">
        <input id="inputid" value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder='Enter To do here'/>
        <input type="date" value={duedate} onChange={(e) => setdue(e.target.value)} id="dtid" />
        <button id='addbtn' onClick={() => {
          handleAdd(todo,duedate);
          setTodo("");
          setdue("");
        }}>Add</button>
    </div>
  )
}

export default AddToDO