import type Project from "@/pages/Project";
import { Table,TableBody,TableHeader,TableRow,TableHead } from "../ui/table";
import CreateProject from "./CreateProject";


const ProjectList = ({projects}: {projects: Project[]}) => {
  return (
    <>
      <Table className="table-fixed">
         <TableHeader>
     <TableRow>
      <TableHead className='font-bold'>Project</TableHead>
      <TableHead className='font-bold'>Status</TableHead>
      <TableHead className='font-bold'>Progress</TableHead>
      <TableHead className='font-bold'>Due Date</TableHead>
      <TableHead className='font-bold'>Members</TableHead>
      <TableHead className='font-bold'>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {projects.map((project) => (
      <TableRow key={project.id}>
        <TableHead>{project.name}</TableHead>
        <TableHead>{project.status}</TableHead>
        <TableHead>{project.progress}</TableHead>
          <TableHead>{project.dueDate}</TableHead>
          <TableHead>{project.members}</TableHead>
        <TableHead>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
          <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
        </TableHead>
        </TableRow>
    ))}
      </TableBody>  
      </Table>
    </>
  );
};

export default ProjectList;