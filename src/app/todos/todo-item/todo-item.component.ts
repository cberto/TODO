import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisic') txtInputFisic!: ElementRef;
  chkCompleted!: FormControl;
  txtInput!: FormControl;

  editando: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //this.todo.completed = true;
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    //this.todo.completed = true;
  }

  edit() {
    this.editando = true;
    setTimeout(() => {

      this.txtInputFisic.nativeElement.select();
    }, 1)
  }

  finishEdit() {

    this.editando = false;
  }

}
