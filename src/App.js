import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import AllTasks from "./components/AllTasks";

function App(){
  return(
    <>

      <Header/>
      <h2>Todo list working</h2>
      <Outlet/>
      {/* <AllTasks/> */}

    
    
    </>
  )
}

export default App;