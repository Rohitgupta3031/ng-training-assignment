import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Route } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css',
})
export class UpdateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  constructor(
    private taskService: TaskService,
    private builder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.taskForm = this.builder.group({
      id: [],
      assignedTo: [],
      status: [],
      dueDate: [],
      priority: [],
      comments: [],
    });
    this.route.params.subscribe((param) => {
      this.taskForm = this.builder.group({
        id: param['id'],
        assignedTo: param['assignedTo'],
        status: param['status'],
        dueDate: param['dueDate'],
        priority: param['priority'],
        comments: param['comments'],
      });
    });
  }
  onSubmit() {
    console.log(this.taskForm.value);
    this.taskService.updateTask(this.taskForm.value).subscribe(
      (res) => {
        window.alert('Task Updated Successfully!...');
        location.reload();
      },
      (error) => {
        window.alert('Task Not Updated. Please Try Again!...');
      }
    );
  }
}
