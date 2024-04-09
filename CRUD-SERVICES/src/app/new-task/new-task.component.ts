import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  form!:FormGroup


  constructor(public taskdetails:TasksService,private fb:FormBuilder){}

  ngOnInit()
  {
    this.form=this.fb.group({
      taskname:[''],
      description:['']
    })
  }
    submit(a:string,b:string)
  {
  if(a&&b)
    {this.taskdetails.addtask(a,b)
  this.form.reset()
  console.log(this.taskdetails.updated);
    }

    else
    {
      alert('All fields are mandatory')
    }
  
  }
  
  abcd(a:string,b:string)
  {

    if(a&&b)
      {
    this.taskdetails.addtask(a,b)
    this.form.reset()
    console.log(this.taskdetails.updated);
    this.taskdetails.updated.splice(0,1)
      }
      else
      {
        alert('All fields are mandatory')
      }
  }
}