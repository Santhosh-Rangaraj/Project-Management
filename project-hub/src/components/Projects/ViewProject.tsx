import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "@/context/ProjectContext";

const ViewProject = () => {
  const { id } = useParams<{ id: string }>();
  const { projects } = useContext(ProjectContext);

  const viewProject = projects.find((project) => project.id === id);
  const projectDueDate = viewProject?.dueDate
    ? new Date(viewProject.dueDate).toLocaleDateString()
    : "Not set";

  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex justify-between p-4">
          <div>
            <h1>{viewProject?.name ?? "Project"}</h1>
            <h5>{viewProject?.description ?? "No description available"}</h5>
          </div>
          <div>
            <button className="rounded text-black p-2 m-2 bg-gray-200 w-28">
              Edit Project
            </button>
            <button className="rounded text-white p-2 m-2 bg-red-500 w-34">
              Delete Project
            </button>
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
    </>
  );
};

export default ViewProject;
