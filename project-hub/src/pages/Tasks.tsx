import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TaskList from "@/components/Task/TaskList";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CreateTask from "@/components/Task/CreateTask";

const Tasks=()=>{
    return(
    <div className="p-4">
    <div className="flex justify-between items-center">
            <div>
            <h1>Task</h1>
            <p className="mt-1 text-gray-600">Manage and track all your tasks</p>
            </div>
            <div>
                <Dialog >
                    <DialogTrigger >
                        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Create Task
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <CreateTask />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4 ">
            <input type="text" placeholder="Search tasks..." className="border-2 rounded p-2" />
            <Select>
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
            <Select>
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
            <Select>
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
        <div className="mt-6">
        <TaskList />
        </div>
        </div>
    )
}

export default Tasks;
