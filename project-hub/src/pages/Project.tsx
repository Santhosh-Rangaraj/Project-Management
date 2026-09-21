import { Plus } from 'lucide-react';
import CreateProject from '../components/Projects/CreateProject';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import ProjectList from '@/components/Projects/ProjectList';

const Project=()=>{
    return(
        <>
        <div className='flex justify-between items-center p-4'>
        <div className='project-header-text'>
        <h1 className='text-4xl font-bold'>Project</h1>
        <p className='text-gray-600'>Manage and track all your projects</p>
        </div>
        <Dialog>
          <DialogTrigger>
            <Button className='bg-blue-600 h-12 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg'>
              <Plus /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent >
            <CreateProject />
          </DialogContent>
        </Dialog>
        </div>
        <ProjectList></ProjectList>
        </>
        
    )
}

export default Project;