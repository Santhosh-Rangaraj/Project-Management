import React from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Dialog } from "@base-ui/react";
import { DialogClose } from "../ui/dialog";
import { useState } from "react";


const CreateTask = ({onCreate}:{onCreate: (task: any) => void}) => {

    const [taskData, setTaskData] =useState({
        title: "",
        description: "",
        project: "" as string | undefined,
        status: "",
        priority: "" as string | undefined,
        assignedTo: "",
        dueDate: undefined as Date | undefined,
    });    

   const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
              id:crypto.randomUUID(),
              title: taskData.title,
              description: taskData.description,
              project: taskData.project,
                status: taskData.status,
                priority: taskData.priority,
                assignedTo: taskData.assignedTo,
                dueDate: taskData.dueDate,
        }
        console.log("newTask",newTask);
        onCreate(newTask);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <FieldGroup>
                <Field>
                    <FieldLabel>Task Title</FieldLabel>
                    <Input value={taskData.title} onChange={(e)=> setTaskData({...taskData, title: e.target.value})} type="text" placeholder="Enter task name" />
                </Field>  
                <Field>
                    <FieldLabel>Task Description</FieldLabel>
                    <Input value={taskData.description} onChange={(e)=> setTaskData({...taskData, description: e.target.value})} type="text" placeholder="Enter task description" />
                </Field>
                <FieldGroup className="grid max-w-sm grid-cols-2">
                    <Field>
                    <FieldLabel>Project</FieldLabel>
                    <Select value={taskData.project} onValueChange={(value)=> setTaskData({...taskData, project: value})}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select project" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Projects</SelectLabel>
                                <SelectItem value="project1">Project 1</SelectItem>
                                <SelectItem value="project2">Project 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </Field>
                    <Field>
                    <FieldLabel>Task Status</FieldLabel>
                    <Select value={taskData.status} onValueChange={(value)=> setTaskData({...taskData, status: value})}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select task status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Status</SelectLabel>
                                <SelectItem value="todo">To Do</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="review">Review</SelectItem>
                                <SelectItem value="done">Done</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </Field>
                </FieldGroup>
                <FieldGroup className="grid max-w-sm grid-cols-2">
                    <Field>
                    <FieldLabel>Task Priority</FieldLabel>
                    <Select value={taskData.priority} onValueChange={(value)=> setTaskData({...taskData, priority: value})}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select task priority" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Priority</SelectLabel>
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    </Field>
                    <Field>
                        <FieldLabel>Assigned To</FieldLabel>
                        <Select value={taskData.assignedTo} onValueChange={(value)=> setTaskData({...taskData, assignedTo: value})}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select member" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Members</SelectLabel>
                                    <SelectItem value="member1">Member 1</SelectItem>
                                    <SelectItem value="member2">Member 2</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </Field>
                </FieldGroup>
                <Field>
                    <FieldLabel>Due Date</FieldLabel>
                    <Popover>
                        <PopoverTrigger >
                            <Button variant="outline" className="w-full justify-start text-left font-normal"> 
                                {taskData.dueDate ? taskData.dueDate.toDateString() : "Pick a date"} 
                               
                                <CalendarIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" 
                            onSelect={(date) => {
                                setTaskData({ ...taskData, dueDate: date });
                            }} 
                            />
                        </PopoverContent>
                    </Popover>
                </Field>
            </FieldGroup>
            <FieldGroup className="grid max-w-sm grid-cols-2">
                <DialogClose
                    render={
                        <Button
                            type="button"
                            variant="secondary"
                            className="mt-4 w-full"
                        />
                    }
                >
                    Cancel
                </DialogClose>

            <DialogClose
                render={
                    <Button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    />
                }
            >
                Create Task
            </DialogClose>
            </FieldGroup>
        </form>
    );
}

export default CreateTask;