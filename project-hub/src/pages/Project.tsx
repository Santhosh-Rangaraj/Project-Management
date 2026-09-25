import { Plus } from "lucide-react";
import CreateProject from "../components/Projects/CreateProject";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProjectList from "@/components/Projects/ProjectList";
import { useState } from "react";
import type { Project } from "@/types/project";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  console.log('projects: ', projects);
  const [editData, setEditData] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const handleProjectDelete = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleEditData = (project: Project) => {
    setEditData(project);
    setDialogOpen(true);
  }

  const DerivedProject = projects
    .filter((project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((project) => {
      if (!filterStatus || filterStatus === "all") return true;
      return project.status.toLowerCase().includes(filterStatus.toLowerCase());
    });


  return (
    <>
      <div className="flex  justify-between gap-4 p-4">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Project</h1>
          <p className="text-gray-600">Manage and track all your projects</p>
        </div>
        <div className='flex justify-end items-center gap-4'>
          <input
            className="border-2 rounded p-2"
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={filterStatus || "all"} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-64 h-12 p-5 rounded-lg border-2">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectLabel >Status</SelectLabel>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="on-hold">On Hold</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger>
            <Button className="bg-blue-600 h-12 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg">
              <Plus /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <CreateProject
              onProjectCreated={(newProject) => {
                setProjects([...projects, newProject]);
              }}
              onProjectedit={(updatedProject) => {
                setProjects((prevProjects) =>
                  prevProjects.map((project) =>
                    project.id === updatedProject.id ? updatedProject : project
                  )
                );
                setEditData(null);
              }}
              editData={editData}
            />
          </DialogContent>
        </Dialog>
      </div>
      <ProjectList
        projects={DerivedProject}
        onProjectDeleted={(id) => handleProjectDelete(id)}
        onProjectEdited={(project) => handleEditData(project)}
      />
    </>
  );
};

export default Project;
