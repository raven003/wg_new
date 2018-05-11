import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { Item, ItemService } from '../item.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {

tasks: Item[] = new Array<Item>();
  timtask: string;
  fabitask: string;
  julestask: string;
  ngOnInit() {
    this.loadTasks();
  }
  constructor(private taskService: ItemService) {
  }
async loadTasks() {
  this.tasks = await this.taskService.getItems({});
  console.log(this.tasks);
}

  public showquote() {

    var tasks = ['wischt die Hütte', 'saugt die Butze', 'cleaned die Bäder'];
    var tasks2 = ['bringt den Müll nundaa', 'räumt Spüli aus', 'leert Aschenbecher asu']
    var rand = Math.floor(Math.random() * 3);
    var rand2 = Math.floor(Math.random() * 2);
    var rand3 = Math.floor(Math.random() * 1);
    document.getElementById('tasks').innerHTML = tasks[rand];

    console.log(tasks);

    this.timtask = tasks[rand];
    var index = tasks.indexOf(this.timtask);
    if (index !== -1)
      tasks.splice(index, 1);
    var newtasks = tasks;
    console.log(newtasks)

    this.fabitask = newtasks[rand2];
    var index = newtasks.indexOf(this.fabitask);
    if (index !== -1)
      newtasks.splice(index, 1);
    var newesttasks= newtasks;
    console.log(newesttasks)

    this.julestask = newesttasks[rand3];
   
  }

}
