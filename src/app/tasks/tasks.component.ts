import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {


  ngOnInit() {
  }
  active = 1;
  test = "hallo";

  constructor() { }


  showquote() {
    var fabitasks = ['Fabi wischt', 'Fabi saugt die Butze', 'Fabi cleaned die Bäder'];

    var timtasks = ['tim wischt', 'tim saugt die Butze', 'tim cleaned die Bäder'];
    var julestasks = ['jules wischt', 'jules saugt die Butze', 'jules cleaned die Bäder'];
    
    var rand = Math.floor(Math.random() * fabitasks.length);

    var rand2= Math.floor(Math.random() * timtasks.length);

    var rand3 = Math.floor(Math.random() * julestasks.length);
    document.getElementById('taskfabe').innerHTML = fabitasks[rand];
    document.getElementById('tasktim').innerHTML = timtasks[rand2];
    document.getElementById('taskjules').innerHTML = julestasks[rand3];
    
  }

}
