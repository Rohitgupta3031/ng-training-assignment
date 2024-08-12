import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { CommonModule, formatDate } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private route: Router) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(taskId: any): void {
    var IsDelete = window.confirm('Do you want to delete task?');
    if (IsDelete) {
      this.taskService.deleteTask(taskId).subscribe((res) => {
        window.alert('Task Deleted Successfully!...');
        location.reload();
      });
    } else {
      location.reload();
    }
  }
  edit(item: Task) {
    this.route.navigate([
      'updateform',
      item._id,
      item.assignedTo,
      formatDate(item.dueDate, 'yyyy-MM-dd', 'en'),
      item.status,
      item.priority,
      item.comments,
    ]);
  }
}
