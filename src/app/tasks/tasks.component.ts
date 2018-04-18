import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {


  timtask: string;
  fabitask: string;
  julestask: string;
  ngOnInit() {
  }
  constructor() {
  }


  public showquote() {

    var tasks = ['wischt die Hütte', 'saugt die Butze', 'cleaned die Bäder'];
    var rand = Math.floor(Math.random() * tasks.length);
    document.getElementById('tasks').innerHTML = tasks[rand];
    this.timtask = tasks[rand];

    for (let i = 0; i < tasks.length; i++) {

      var index = tasks.indexOf(this.timtask);
      if (index !== -1) tasks.splice(index, 1);
      this.fabitask = tasks[rand];

      index = tasks.indexOf(this.fabitask);
      if (index !== -1) tasks.splice(index, 1);
      this.julestask = tasks[i];

    }
    console.log(tasks);
  }

}

