import React from "react";
import KanbanCard from "./KanbanCard";


const KanbanColumn = ({task}:{task:any}) => {

    const taskStatus=[{id: 'to-do',value:"To Do"}, {id: 'in-progress',value:"In Progress"}, {id: 'review',value:"Review"}, {id: 'done',value:"Done"}];
    return (
       <div className="bg-slate-100/70 p-3 min-h-[50vh]">
        <div className="grid grid-cols-4 gap-3 w-auto min-h-[50vh]">
        {taskStatus.map((status) => (
            <div key={status.id} className="bg-white rounded-lg p-2 shadow-md">
                <p className="text-gray-500">{status.value}</p>
                {task.filter((t:any) => t.status === status.id).map((t:any) => (
                    <KanbanCard key={t.id} task={t} />
                ))}
            </div>
        ))}
            </div>
        </div>
    );
}
        



export default KanbanColumn;