import { Button } from '@base-ui/react';
import React from 'react';


const ViewProject=()=>{
    return(
        <>
        <div className='flex flex-col gap-4'>
        <div className='flex justify-between p-4'>
        <div>
            <h1>View Project</h1>
            <h4>Description about the project is created here...</h4>
        </div>
        <div>
        <button className='rounded text-black p-2 m-2 bg-gray-200 w-28'>Edit Project</button>
        <button className='rounded text-white p-2 m-2 bg-red-500 w-34'>Delete Project</button>
        </div>
        </div>
        <div className='p-4 w-full border border-gray-200 rounded'>
            <div className='flex justify-between gap-4'>
            <div>
            <h5>Progress</h5>
            <p>10%</p>
            </div>
            <div>
                <h5>Tasks</h5>
                <p>dsds</p>
            </div>
            <div>
                <h5>Team Members</h5>
                <p>Arjun</p>
            </div>
            <div>
                <h5>Due Date</h5>
                <p>Date</p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ViewProject;