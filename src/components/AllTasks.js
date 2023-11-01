import { Outlet } from "react-router-dom";
import { taskList } from "../utils/tasksContext";
import { useContext } from "react";
function AllTasks(){

    const tasks = useContext(taskList);
    return(

        <>
            <h2>All task imported.</h2>
            <Outlet/>
            <h5>{tasks.alltasks[0].category}</h5>
            {console.log(tasks)}
        </>
    )
}
export default AllTasks;