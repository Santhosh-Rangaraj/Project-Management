import { useEffect, useState, type FormEvent } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns/format";
import { CalendarIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@/components/ui/dialog";
import type { Project } from "@/types/project";

const Status = ["Planning", "Active", "Completed", "On Hold", "Archived"];

export const Members = ["Arjun", "Sam", "Santhosh", "Potter", "Lannister"];

const defaultProjectData = () => ({
  name: "",
  description: "",
  status: "Planning",
  dueDate: undefined as Date | undefined,
  members: [] as string[],
});

const CreateProject = ({
  onProjectCreated,
  editData,
  onProjectedit,
}: {
  onProjectCreated: (project: Project) => void;
  editData: Project | null;
  onProjectedit: (project: Project) => void;
}) => {
  const [projectData, setProjectData] = useState<{
    name: string;
    description: string;
    status: string;
    dueDate?: Date;
    members: string[];
    progress?: string;
  }>(defaultProjectData());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (editData) {
      const updatedProject: Project = {
        ...editData,
        name: projectData.name,
        description: projectData.description,
        status: projectData.status,
        dueDate: projectData.dueDate ?? editData.dueDate ?? new Date(),
        members: projectData.members.length
          ? projectData.members
          : editData.members,
      };
      onProjectedit(updatedProject);
      return;
    }

    const data: Project = {
      id: crypto.randomUUID(),
      name: projectData.name,
      description: projectData.description,
      status: projectData.status ?? "Planning",
      dueDate: projectData.dueDate ?? new Date(),
      members: projectData.members,
      progress: "0%",
    };
    onProjectCreated(data);
  };

  useEffect(() => {
    if (editData) {
      setProjectData({
        name: editData.name,
        description: editData.description,
        status: editData.status,
        dueDate:
          editData.dueDate instanceof Date ? editData.dueDate : undefined,
        members: editData.members ?? [],
      });
      return;
    }

    setProjectData(defaultProjectData());
  }, [editData]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel>Project Name</FieldLabel>
            <Input
              value={projectData.name}
              onChange={(e) =>
                setProjectData((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              placeholder="Enter project name"
            />
          </Field>
          <Field>
            <FieldLabel>Project Description</FieldLabel>
            <Textarea
              value={projectData.description}
              onChange={(e) =>
                setProjectData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              placeholder="Enter project description"
            />
          </Field>
          <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
              <FieldLabel>Status</FieldLabel>
              <Select
                value={projectData.status}
                onValueChange={(value) => {
                  const nextStatus = value ?? "Planning";
                  setProjectData((prev) => ({ ...prev, status: nextStatus }));
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    {Status.map((status) => (
                      <SelectItem value={status} key={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel>Due Date</FieldLabel>
              <Popover>
                <PopoverTrigger>
                  <Button type="button" variant="outline">
                    {projectData.dueDate ? (
                      format(projectData.dueDate, "PPP")
                    ) : (
                      <span>Select a date</span>
                    )}{" "}
                    <CalendarIcon />
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
            <Select
              value={projectData.members[0] ?? ""}
              onValueChange={(value) => {
                const nextMember = value ?? "";
                setProjectData((prev) => ({
                  ...prev,
                  members: nextMember ? [nextMember] : [],
                }));
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Project Members" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {Members.map((member) => (
                    <SelectItem value={member} key={member}>
                      {member}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <FieldGroup className="grid grid-cols-2 gap-4">
            <DialogClose>
              <Button
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => setProjectData(defaultProjectData())}
              >
                Cancel
              </Button>
            </DialogClose>

            <DialogClose>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                {editData ? "Update Project" : "Create Project"}
              </Button>
            </DialogClose>
          </FieldGroup>
        </FieldGroup>
      </form>
    </>
  );
};

export default CreateProject;
