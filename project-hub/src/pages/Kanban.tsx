import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState } from "react";

const Kanban=()=>{
    return(
        <>
        <h1>Kanban</h1>
        <h5>Visualize and manage your workflow</h5>

        <div className="flex justify-between items-center mt-4 ">
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
        </div>
        </>  
    )
}

export default Kanban;