import {useRef} from 'react';
import { MdAdd } from "react-icons/md";
function AddTodo({onNewItem}){
   //const [todoName, setTodoName]=useState('');
   //const [todoDate, setTodoDate]=useState('');
  // const noOfUpdates=useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  //  const handleNameChange=(event)=>{
  //     setTodoName(event.target.value);
  //     //noOfUpdates.current+=1;
  //  }
  //  const handleDateChange=(event)=>{
  //   setTodoDate(event.target.value);
  //  // console.log(noOfUpdates.current);
  //  }
   const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
   // console.log(`${todoName} and ${dueDate}`);
    onNewItem(todoName,dueDate);
    // setTodoDate("");
    // setTodoName("");
   }
   

   return (
    <div className="container text-center">
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
   <div className="col-6">
     {/* <input value={todoName} type="text" placeholder="Enter Todo Here" onChange={handleNameChange}/> */}
     <input ref={todoNameElement}  type="text" placeholder="Enter Todo Here" />
     </div>
   <div className="col-4">
   {/* <input  value={todoDate} type="date" onChange={handleDateChange} /> */}
   <input ref={dueDateElement}  type="date"  />
   </div>
   <div className="col-2">
   {/* <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>Add</button> */}
   {/* <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}><MdAdd /></button> */}
   <button  type="submit" className="btn btn-success kg-button" ><MdAdd /></button>
   </div>
 </form>
 </div>
   );   

}
export default AddTodo;