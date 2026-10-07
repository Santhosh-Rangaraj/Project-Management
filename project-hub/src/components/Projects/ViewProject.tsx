import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ProjectContext, type Project } from "@/context/ProjectContext";
import CreateProject from "./CreateProject";
import { Dialog, DialogContent,} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
const ViewProject = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { projects,setProjects } = useContext(ProjectContext);
  const [DialogOpen, setDialogOpen] = useState(false);


  const viewProject: Project | undefined = projects.find((project) => project.id === id);
  console.log('viewProject: ', viewProject);
  const projectDueDate = viewProject?.dueDate
    ? new Date(viewProject.dueDate).toLocaleDateString()
    : "Not set";

    const handleProjectEdit = (updatedProject: Project) => {
      setProjects((prevProjects) =>
        prevProjects.map((project) => 
          project.id === updatedProject.id ? updatedProject : project
        ) 
      );
      setDialogOpen(false);
    }

  const handleDelete = () => {
    if (!viewProject) return;

    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== viewProject.id),
    );
    navigate("/projects", { replace: true });
  };


  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between p-4">
          <div>
            <h1>{viewProject?.name ?? "Project"}</h1>
            <h5>{viewProject?.description ?? "No description available"}</h5>
          </div>
          <div>
            <button className="rounded text-black p-2 m-2 bg-gray-200 w-28" onClick={() => setDialogOpen(true)}>
              Edit Project
            </button>
            <AlertDialog>
              <AlertDialogTrigger>
                <button className="rounded text-white p-2 m-2 bg-red-500 w-34">
                  Delete Project
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the project.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="p-4 w-full border border-gray-200 rounded">
          <div className="flex justify-between gap-4">
            <div>
              <h5>Progress</h5>
              <p>{viewProject?.progress ?? "0%"}</p>
            </div>
            <div>
              <h5>Status</h5>
              <p>{viewProject?.status ?? "Planning"}</p>
            </div>
            <div>
              <h5>Team Members</h5>
              <p>{viewProject?.members?.join(", ") ?? "No members"}</p>
            </div>
            <div>
              <h5>Due Date</h5>
              <p>{projectDueDate}</p>
            </div>
          </div>
        </div>
        <Tabs
          defaultValue="overview"
          className="w-full rounded-md border border-gray-200 bg-white p-2"
        >
          <TabsList
            variant="line"
            className="mx-4 w-[400px] rounded-md border-b border-gray-200 bg-transparent p-1"
          >
            <TabsTrigger value="overview">OverView</TabsTrigger>
            <TabsTrigger value="task">Task</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <p className="mb-4">
              {viewProject?.description ?? "No description available."}
            </p>
            <Progress
              value={Number.parseInt(
                viewProject?.progress?.replace("%", "") ?? "0",
                10,
              )}
              className="p-2 w-[400px]"
            >
              <ProgressLabel>Project Progress</ProgressLabel>
              <ProgressValue />
            </Progress>
          </TabsContent>
          <TabsContent value="task">Change your password here.</TabsContent>
          <TabsContent value="activity">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <Dialog open={DialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <CreateProject editData={viewProject ?? null} onProjectedit={handleProjectEdit} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewProject;
