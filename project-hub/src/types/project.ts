export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  dueDate?: string | Date;
  members?: string;
  progress?: string;
}