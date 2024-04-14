import AddToDO from '../components/AddToDO'
import Items from '../components/Items'
import { useState } from "react"

import './App.css'



const App = () => {
  
  const [items, setItems] = useState([
    { karm: "Aaram Karo", time: "Kabhi Nahi" },
    { karm: "School Ka Kaam", time: "Kabhi Nahi" }
  ]);
  
  const handleAdd = (todo,duedate) => {
    setItems([...items,{ karm: todo, time: duedate }]);
  }

  const handleDelete =(todo,duedate) => {
    setItems(items.filter((it) => it.karm != todo || it.time != duedate));
  }


  
  return (
    <div className='full'>
    <h1>Om Namah Shivay</h1>
    <h1 className='wow'>TO DO App</  h1>
    <AddToDO handleAdd={handleAdd}/>
    <Items items={items} handleDelete={handleDelete}/>
    </div>

    )
}

export default App