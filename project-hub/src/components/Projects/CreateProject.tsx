import React, { useState } from 'react';
import {
 Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from 'date-fns/format';
import { CalendarIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

 const Status=[
        "Planning",
        "Active",
        "Completed",
        "On Hold",
        "Archived",
    ]
    const Members=[
      "Arjun",
      "Sam",
      "Santhosh",
      "Potter",
      "Lannister"      
    ]

const CreateProject = () => {
  const [projectData, setProjectData] = useState<{
    name: string;
    description: string;
    status: string;
    dueDate?: Date;
    members: string[];
  }>({
    name: '',
    description: '',
    status: 'Planning',
    dueDate: undefined,
    members: []
  });

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log('projectData', projectData);
  }

    return (
       <>
       <form onSubmit={handleSubmit}>
     <FieldGroup>
        <Field>
            <FieldLabel>Project Name</FieldLabel>
            <Input value={projectData.name} onChange={(e) => setProjectData({...projectData, name: e.target.value})} type="text" placeholder="Enter project name" />
        </Field>
        <Field>
            <FieldLabel>Project Description</FieldLabel>
            <Textarea value={projectData.description} onChange={(e) => setProjectData({...projectData, description: e.target.value})} placeholder="Enter project description" />
        </Field>
         <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
                <FieldLabel>Status</FieldLabel>
                <Select value={projectData.status} onValueChange={(value) => setProjectData({...projectData, status: value})}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
        {Status.map((status) => (
          <SelectItem value={status} key={status}>{status}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
            </Field>
            <Field>
                <FieldLabel>Due Date</FieldLabel>
                <Popover>
                    <PopoverTrigger>
                        <Button variant="outline">
                            {projectData.dueDate ? format(projectData.dueDate, "PPP") : <span>Select a date</span>}{" "} <CalendarIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={projectData.dueDate}
                            onSelect={(newDate) => {
                                setProjectData((prev) => ({ ...prev, dueDate: newDate }));
                            }}
                        />
                    </PopoverContent>
                </Popover>  
            </Field>
         </FieldGroup>
            <Field>
                <FieldLabel>Members</FieldLabel>
                <Select value={projectData.members} onValueChange={(value)=>setProjectData({...projectData, members: [...projectData.members, value]})}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Project Members" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
        {Members.map((mem) => (
          <SelectItem value={mem} key={mem}>{mem}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
      </Field>
        <FieldGroup className="grid max-w-sm grid-cols-2">
        
            <Button type="reset" variant="secondary">Cancel</Button>
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">Create Project</Button>
          </FieldGroup>
    </FieldGroup>
    </form>
               </>
    );
};

export default CreateProject;




