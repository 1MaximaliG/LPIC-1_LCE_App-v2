import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { AnswerComponent } from './answer/answer.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnswerComponent,
    ExamComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FormsModule
  ]
})
export class ExamModule { }
