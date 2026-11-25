import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";
import KanbanCard from "@/components/Kanban/KanbanCard";

const Kanban=()=>{
    return(
        <div className="p-4">
        <h1>Kanban</h1>
        <p className="text-gray-500">Visualize and manage your workflow</p>

        {/* <div className="flex justify-between items-center mt-4 ">
            <input type="text"  placeholder="Search tasks..." className="border-2 rounded p-2" />
            <Select  className="ml-4">
                <SelectTrigger className="w-64 h-12 p-5 rounded-lg border-2">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="review">Review</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select  className="ml-4">
                <SelectTrigger className="w-64 h-12 p-5 rounded-lg border-2">
                    <SelectValue placeholder="Filter by Priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Priority</SelectLabel>
                        <SelectItem value="all">All Priorities</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select  className="ml-4">
                <SelectTrigger className="w-64 h-12 p-5 rounded-lg border-2">
                    <SelectValue placeholder="Filter by Project" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Project</SelectLabel>
                        <SelectItem value="all">All Projects</SelectItem>
                        <SelectItem value="project1">Project 1</SelectItem>
                        <SelectItem value="project2">Project 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div> */}
        <div className="m-grey border-2">

            <KanbanCard task={{ title: "Task 1", description: "Description for Task 1" }} />

        </div>
        </div>  
    )
}

export default Kanban;