import React from "react";



const KanbanColumn = ({task}: {task: any}) => {
    return (
       <div className="bg-slate-100/70 rounded-lg p-3 min-h-[500px]">
        <div className="flex justify-between items-center mb-2">
        <p>{task.title}</p>
        <p>{task.length>0? task.length : 0}</p>
        </div>



       </div>
    )
};


export default KanbanColumn;