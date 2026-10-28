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


const CreateTask = () => {
    return (
        <form>
            <FieldGroup>
                <Field>
                    <FieldLabel>Task Title</FieldLabel>
                    <Input type="text" placeholder="Enter task name" />
                </Field>  
                <Field>
                    <FieldLabel>Task Description</FieldLabel>
                    <Input type="text" placeholder="Enter task description" />
                </Field>
                <FieldGroup className="grid max-w-sm grid-cols-2">
                    <Field>
                    <FieldLabel>Project</FieldLabel>
                    <Select>
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
                    <Select>
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
                    <Select>
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
                        <Select>
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
                                <span className="text-muted-foreground">Pick a date</span> 
                                <CalendarIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" 
                            selected={new Date()}
                            onSelect={(date) => console.log(date)} 
                            />
                        </PopoverContent>
                    </Popover>
                </Field>
            </FieldGroup>
            <FieldGroup className="grid max-w-sm grid-cols-2">
                <DialogClose >
                    <Button type="button" variant="secondary" className="w-full">
                        Cancel
                    </Button>
                </DialogClose>

            <DialogClose >
                <Button type="button" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Create Task
                </Button>
            </DialogClose>
            </FieldGroup>
        </form>
    );
}

export default CreateTask;