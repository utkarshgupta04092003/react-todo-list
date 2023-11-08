import React, { useState, Provider } from "react";
import TaskContainer from "./components/TaskContainer";
import Taskform from "./components/Taskform";

import { TaskContext } from "./utils/tasks";

function App() {



  const [tasks, setTasks] = useState( [
    {
      id: -1,
      taskName: "Drinking milk",
      taskCategory: "Personal",
      taskDeadline: "10/10/2000",
      isCompleted: false,
    },
    
  ]);

  const [counter, setCounter] = useState(0);
  function AddTask(title,category,deadline){

    setCounter(counter+1);
    const prevTasks = tasks;
    prevTasks.unshift({
      id: counter,
      taskName: title,
      taskCategory: category,
      taskDeadline: deadline,
      isCompleted: false,
    })
    setTasks(prevTasks);

  }

  function DeleteTask(id){

    console.log('delete function working in parent',id);
    // alert('Delete button works',id);
    let newList = tasks.filter(task => task.id !== id);
    setTasks(newList);
  }

  return (
    <div className=" border-gray-500 w-full md:w-1/2 m-auto text-gray-600">
      


      <TaskContext.Provider value={{tasks,setTasks}}>
      <Taskform AddTask={AddTask}/>
      {/* output container */}

      <TaskContainer tasks={tasks} DeleteTask={DeleteTask}/>

      </TaskContext.Provider>


    </div>
  );
}

export default App;
