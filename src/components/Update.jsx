import { useParams } from "react-router-dom";
import Taskform from "./Taskform";
import { useContext } from "react";
import { TaskContext } from "../utils/tasks";

function Update({taskdetails}){

    const {id} = useParams();

    const {tasks,setTasks} = useContext(TaskContext);
    return(
        <div>
            Update Page {id}
            {taskdetails? taskdetails.taskName: "Not found name"}

            {console.log('tasks: ',tasks,setTasks)}
        </div>
    )
}
export default Update;