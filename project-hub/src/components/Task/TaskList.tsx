import React from "react";
import ResponsiveTable from "../common/Reuseable_Table";


const tableHeaders = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "priority", label: "Priority" },
    { key: "project", label: "Project" },
    { key: "dueDate", label: "Due Date" },
    { key: "actions", label: "Actions" },
];


const TaskList = ({taskData}: { taskData: any[] }) => {
    return (
        <div>
            <ResponsiveTable tableHeaders={tableHeaders} data={taskData.length>0 ? taskData : []} />
        </div>
    );
}
export default TaskList;