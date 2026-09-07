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







const CreateProject = () => {

    const Status=[
        "Planning",
        "Active",
        "Completed",
        "On Hold",
        "Archived",
    ]

const [open, setOpen] = useState(false)
const [date, setDate] = useState<Date | undefined>(undefined)

    return (
       <>
     <FieldGroup>
        <Field>
            <FieldLabel>Project Name</FieldLabel>
            <Input type="text" placeholder="Enter project name" />
        </Field>
        <Field>
            <FieldLabel>Project Description</FieldLabel>
            <Input type="text" placeholder="Enter project description" />
        </Field>
         <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
                <FieldLabel>Status</FieldLabel>
                <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
        {Status.map((status) => (
          <SelectItem value={status}>{status}</SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
            </Field>
            <Field>
                <FieldLabel>Due Date</FieldLabel>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline">
                            {date ? format(date, "PPP") : <span>Select a date</span>}{" "} <CalendarIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </PopoverContent>
                </Popover>  
            </Field>
         </FieldGroup>
          <FieldGroup className="grid max-w-sm grid-cols-2">
            <Button type="submit">Create Project</Button>
            <Button type="reset" variant="secondary">Cancel</Button>
          </FieldGroup>
    </FieldGroup>
               </>
    );
};

export default CreateProject;




