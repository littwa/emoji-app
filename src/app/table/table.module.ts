import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { DiaryComponent } from './diary/diary.component';
import { PostComponent } from './post/post.component';
import { TablePageComponent } from './table-page/table-page.component';

@NgModule({
  declarations: [
    TablePageComponent,
    DiaryComponent,
    PostComponent
  ],
  imports: [
    PickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  exports: [TablePageComponent]
})
export class TableModule { }
