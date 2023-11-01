import React from "react";
import { createContext } from "react";

const tasks = {
    alltasks: [{
        title: "Task title 1",
        subTitle: "Task subtitle 1",
        dueDate: "12/10/2022",
        category: "Personal",
        isCompleted: false,

    },
    {
        title: "Task title 2",
        subTitle: "Task subtitle 2",
        dueDate: "02/10/2022",
        category: "Professional",
        isCompleted: true,

    }]
}

export const taskList = React.createContext(tasks);