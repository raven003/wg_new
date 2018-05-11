import { Item, ItemService } from './../../item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

    @Input() task: Item;
    @Output() onTaskCreated = new EventEmitter();

    constructor(private taskService: ItemService) {}

    private template: Item = {
        AssignedTo: '',
        Title: '',
        Reward: 1,
        Due: new Date(),
        Icon: 'fab fa-stack-overflow' 
    }

    public edit: boolean = false;
    public new: boolean = false;
  ngOnInit() {
      if (!this.task) {
          this.new = true;
      }
  }

  startCreateNew() {
    this.task = _.clone(this.template);
    this.edit = true;
    this.new = true;
  }
  cancelEdit() {
      this.edit = false;
      this.new = false;
  }

  async deleteTask(){
      this.taskService.deleteItem(this.task);
      console.log("delete this Task")
      window.location.reload();
  }

  async saveTask() {
      let saved;
      console.log('toSave',this.task);
      if (this.new) {
          saved = await this.taskService.createItem(this.task);
      } else {
        saved = await this.taskService.updateItem(this.task);
      }
      if (saved) {
          //OK
          if (this.new) {
              this.task = null;
              this.new = true;
              this.onTaskCreated.emit(); 
            }
            const wasNew = this.new;
            this.cancelEdit();
            this.new = wasNew;
      }
  }
  


  

}
