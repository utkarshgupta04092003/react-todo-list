import SingleTask from "./SingleTask";

function TaskContainer({tasks, DeleteTask}) {
  console.log("task in conatiner",tasks)
  return (
    <div className="border border-gray-500 p-2">
        <hr/>
        <h2 className="font-bold text-2xl text-center my-7">All Tasks</h2>

        
        {tasks.map((task) => (
            <SingleTask task={task} DeleteTask={DeleteTask}/>    
        ))}

        </div>
  );
}
export default TaskContainer;
