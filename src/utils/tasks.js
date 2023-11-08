import { createContext } from "react";

export const TaskContext = createContext(
    {
        id: 1,
        taskName: "Drinking milk",
        taskCategory: "Personal",
        taskDeadline: "10/10/2000",
        isCompleted: false,
      },
      {
        id: 2,
        taskName: "Bathing ",
        taskCategory: "Personal",
        taskDeadline: "10/10/2000",
        isCompleted: false,
    
      },
);
