import { Plus } from 'lucide-react';
import CreateProject from '../components/Projects/CreateProject';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import ProjectList from '@/components/Projects/ProjectList';
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  dueDate?: string;
  members?: string;
  progress?: string;
}

const Project=()=>{
  const [projects, setProjects] = useState<Project[]>([]);
  console.log('projects: ', projects);
    return(
        <>
        <div className='flex justify-between items-center p-4'>
        <div className='project-header-text'>
        <h1 className='text-4xl font-bold'>Project</h1>
        <p className='text-gray-600'>Manage and track all your projects</p>
        </div>
        <Dialog>
          <DialogTrigger >
            <Button className='bg-blue-600 h-12 p-4 rounded-lg hover:bg-blue-700 hover:shadow-lg'>
              <Plus /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent >
            <CreateProject onProjectCreated={(newProject) => {
              setProjects([...projects, newProject]);
            }} />
             
          </DialogContent>
          
        </Dialog>
        </div>
        <ProjectList projects={projects} />
        </>
        
    )
}

export default Project;