import { Component } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { RouterOutlet } from '@angular/router';
import { TaskUpdateComponent } from './task-update/task-update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewTaskComponent,TaskUpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CRUD-SERVICES';
}
