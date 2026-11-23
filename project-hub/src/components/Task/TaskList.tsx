import React from "react";
import ResponsiveTable from "../common/Reuseable_Table";


const tableHeaders = [
    { key: "title", label: "Name" },
    { key: "status", label: "Status" },
    { key: "priority", label: "Priority" },
    { key: "project", label: "Project" },
    { key: "dueDate", label: "Due Date" },
];


const TaskList = ({taskData,onEdited} : { taskData: any[];onEdited: (task: any) => void }) => {
   
    return (
        <div>
            <ResponsiveTable tableHeaders={tableHeaders} data={taskData.length>0 ? taskData : []} onEdited={onEdited} />
        </div>
    );
}
export default TaskList;