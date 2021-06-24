import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  public posts: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  addPostChange(post: string): void {
    this.posts.push(post);
  }

}
