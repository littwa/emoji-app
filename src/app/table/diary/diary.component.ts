import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  @ViewChild('textarea', { static: false }) textarea;
  @Output() onAddPostChange: EventEmitter<string> = new EventEmitter<string>();

  public isVisible: boolean = true;
  public value: string = '';

  constructor() { }

  ngOnInit(): void { }

  addEmoji(e): void {
    this.value = this.value + e.emoji.native;
  }

  addPostHandle(): void {

    if (!this.value) return;

    this.onAddPostChange.emit(this.value);
    this.value = '';
  }

}
