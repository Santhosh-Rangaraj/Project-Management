import { Table,TableBody,TableHeader,TableRow,TableHead } from "../ui/table";


const ProjectList = () => {
  return (
    <>
      <Table className="table-fixed">
         <TableHeader>
     <TableRow>
      <TableHead>Project</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Progress</TableHead>
      <TableHead>Due Date</TableHead>
      <TableHead>Members</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableHead>Project 1</TableHead>
      <TableHead>Active</TableHead>
        <TableHead>50%</TableHead>
        <TableHead>2024-06-30</TableHead>
        <TableHead>John, Jane</TableHead>
        <TableHead>Edit | Delete</TableHead>
        </TableRow>
      </TableBody>
      </Table>
    </>
  );
};

export default ProjectList;