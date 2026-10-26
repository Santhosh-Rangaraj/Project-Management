import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/table";
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
import { Link } from "react-router-dom";


const ReusableTable = ({
  data,
  onDeleted,
  onEdited,
  tableHeaders,
}: {
  data: Array<Record<string, unknown>>;
  onDeleted: (id: string) => void;
  onEdited: (item: Record<string, unknown>) => void;
  tableHeaders: { key: string; label: string }[];
}) => {
  const handleDelete = (id: string) => {
    onDeleted(id);
  };

  return (
    <>
      <Table className="table-fixed">
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableHead key={index} className="font-bold">
                {header.label}
              </TableHead>
            ))}
          
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
               {tableHeaders.map((header) => (
                <TableCell key={header.key}>
                  {String(item[header.key] ?? "-")}
                </TableCell>
              ))}
              <TableCell>
                <Link
                  to={`/projects/view/${item.id}`}
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                >
                  View
                </Link>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdited(item)}
                >
                  Edit
                </button>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                      Delete
                    </button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>

                      <AlertDialogDescription>
                        This will permanently delete this project.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ReusableTable;