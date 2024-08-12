import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

export const routes: Routes = [
  { path: 'taskform', component: TaskFormComponent },
  {
    path: 'updateform/:id/:assignedTo/:dueDate/:status/:priority/:comments',
    component: UpdateTaskComponent,
  },
];
