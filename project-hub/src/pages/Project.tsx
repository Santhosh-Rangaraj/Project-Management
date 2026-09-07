import { Plus } from 'lucide-react';
import CreateProject from '../components/Projects/CreateProject';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import"../styles/Project.css";
const Project=()=>{
    return(
        <>
        <div className='project-header'>
        <div className='project-header-text'>
        <h1>Project</h1>
        <p>Manage and track all your projects</p>
        </div>
        <Dialog>
          <DialogTrigger render={<button><Plus /> Add Project</button>}/>
          <DialogContent>
            <CreateProject />
          </DialogContent>
        </Dialog>
        </div>
        </>
        
    )
}

export default Project;