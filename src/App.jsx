import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import {useState} from 'react';
function App() {
  
  const [todoItems, setTodoItems]=useState([]);

  const handleNewItem = (itemName, itemDate) =>{
    // console.log(`new item added : ${itemName} ${itemDate}`);
    // const newTodoItems=[...todoItems, {name: itemName , dueDate: itemDate}];
    // setTodoItems(newTodoItems);
    setTodoItems((currValue)=>{
    //  console.log(`new item added : ${itemName} ${itemDate}`);
    const newTodoItems=[...currValue, {name: itemName , dueDate: itemDate}];
    
    return newTodoItems;
    });
  }

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter(item=> item.name!=todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted ${todoItemName}`);
  }

  return <center className="todo-content">
    <AppName></AppName>    
    <AddTodo onNewItem={handleNewItem}></AddTodo>
    {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    
    </center>

}

export default App
