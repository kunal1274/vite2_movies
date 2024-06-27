import { useDispatch, useSelector } from "react-redux";
import toDoSlice from "../slice/ToDoSlice";
const todoSliceActions = toDoSlice.actions;

function ToDoListComponent(){
    const taskList = ["task1","task2","task3"];
    const taskList1 = useSelector((globalState)=>{
        return globalState.toDoSliceState;
    })
    const doingTheDispatch = useDispatch();
    // console.log(taskList1)
    const handleInputChange =(e)=>{
        const sendingText = e.target.value;
        // console.log(sendingText)
        const length = sendingText.length;
        doingTheDispatch(todoSliceActions.updateInputTaskText({text : sendingText,textLength : length}));
    }

    const handleAddTask = () =>{
        doingTheDispatch(todoSliceActions.addTheTask(taskList1.taskValue));
        
    }
    return (
        
    <div className="flex flex-col justify-center items-center">
        <div className="font-bold m-2">To Do List</div>
        <input className="border m-2" type="text" value={taskList1.taskValue} onChange={handleInputChange} placeholder="Input Task"/>
        <button className="border bg-green-300 m-2 p-2" onClick={handleAddTask}>Add</button>
        <ul>
            {
                taskList1.todoList.map((t,index)=>{
                    return(
                        <li className="m-2" key={index}>
                            {t}
                        </li>
                    );
                })
            }
        </ul>

    </div>
    );
}

export default ToDoListComponent;