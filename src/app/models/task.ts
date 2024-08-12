export interface Task {
  _id: string;
  assignedTo: string;
  status: 'Completed' | 'In Progress' | 'Not Started';
  dueDate: Date;
  priority: 'Low' | 'Normal' | 'High';
  comments: string;
}
