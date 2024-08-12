import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task!: Task[];
  taskForm!: FormGroup;
  taskUser!: Task[];
  constructor(private taskService: TaskService, private builder: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.builder.group({
      assignedTo: [],
      status: [],
      dueDate: [],
      priority: [],
      comments: [],
    });

    this.taskService.getTasks().subscribe((res) => {
      this.taskUser = res;
    });
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.createTask(this.taskForm.value).subscribe(
      (res) => {
        this.task = Array.isArray(res) ? res : [res];
        if (this.task) {
          window.alert('Task Added Successfully!...');
          location.reload();
        }
      },
      (error) => {
        window.alert('Task Not Added. Please Try Again!...');
      }
    );
  }
  editTask(task: Task): void {}
}
