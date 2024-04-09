import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-update.component.html',
  styleUrl: './task-update.component.scss'
})
export class TaskUpdateComponent {

  abc:any[]=['']
  constructor(private taskdetail:TasksService){}

  ngOnInit()
  {this.abc=this.taskdetail.task;
  console.log(this.abc);
  
  }

  delete(i:number)
  {
    this.taskdetail.task.splice(i,1)
    console.log(this.taskdetail.task);
    
  }

  update(i:number)
  {
    if (i === 0) {
      this.taskdetail.updated = this.taskdetail.task.slice(0, 1);
    } else {
      this.taskdetail.updated = this.taskdetail.task.slice(i,i+1);
    }
    console.log(this.taskdetail.updated);
    this.taskdetail.task.splice(i,1)

  }
}
