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

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  dueDate?: string | Date;
  members?: string;
  progress?: string;
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editData, setEditData] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProjectDelete = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleEditData = (project: Project) => {
    setEditData(project);
    setDialogOpen(true);
  }


  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="project-header-text">
          <h1 className="text-4xl font-bold">Project</h1>
          <p className="text-gray-600">Manage and track all your projects</p>
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
        projects={projects}
        onProjectDeleted={(id) => handleProjectDelete(id)}
        onProjectEdited={(project) => handleEditData(project)}
      />
    </>
  );
};

export default Project;
