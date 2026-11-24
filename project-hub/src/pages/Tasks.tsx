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
import { useState,useEffect } from "react";

const Tasks=()=>{
    const [taskData, setTaskData] = useState([]);
    const [editData, setEditData] = useState<any | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [filterPriority, setFilterPriority] = useState("all");
    const [filterProject, setFilterProject] = useState("all");

    const handleCreateTask = (newTask:any) => {
        setTaskData((prevTasks) => [...prevTasks, newTask]);
    }

    const handleEditTask = (updatedTask:any) => {
        setEditData(updatedTask);
        setDialogOpen(true);
      }
      const handleUpdate = (updatedTask:any) => {
        setTaskData((prevTasks:any) =>
          prevTasks.map((task:any) =>   
            task.id === updatedTask.id ? updatedTask : task
            )
        );
        setEditData(null);
        setDialogOpen(false);
      }

      const  DerivedTaskData=taskData.filter((task:any) => {
        const matchesSearchTerm = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilterStatus = filterStatus === "all" || task.status === filterStatus;
        const matchesFilterPriority = filterPriority === "all" || task.priority === filterPriority;
        const matchesFilterProject = filterProject === "all" || task.project === filterProject;
        return matchesSearchTerm && matchesFilterStatus && matchesFilterPriority && matchesFilterProject;
      }
      )

    return(
    <div className="p-4">
    <div className="flex justify-between items-center">
            <div>
            <h1>Task</h1>
            <p className="mt-1 text-gray-600">Manage and track all your tasks</p>
            </div>
            <div>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger >
                        <button onClick={()=>setEditData(null)} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Create Task
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <CreateTask onUpdate={handleUpdate} onCreate={handleCreateTask} editData={editData} />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
        <div className="flex justify-between items-center mt-4 ">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search tasks..." className="border-2 rounded p-2" />
            <Select value={filterStatus} onValueChange={(value) => setFilterStatus(value)} className="ml-4">
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
            <Select value={filterPriority} onValueChange={(value) => setFilterPriority(value)} className="ml-4">
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
            <Select value={filterProject} onValueChange={(value) => setFilterProject(value)} className="ml-4">
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
        <TaskList taskData={DerivedTaskData} onEdited={handleEditTask} />
        </div>
        </div>
    )
}

export default Tasks;
