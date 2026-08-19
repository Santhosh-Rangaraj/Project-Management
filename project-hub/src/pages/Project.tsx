import { Plus } from 'lucide-react';

import"../styles/Project.css";
const Project=()=>{
    return(
        <>
        <div className='project-header'>
        <div className='project-header-text'>
        <h1>Project</h1>
        <p>Manage and track all your projects</p>
        </div>
        <button><Plus /> Add Project</button>
        </div>
        </>
        
    )
}

export default Project;