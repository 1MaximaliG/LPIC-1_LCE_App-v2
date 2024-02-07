import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckRoutingModule } from './check-routing.module';
import { CheckComponent } from './check.component';
import { AnswerComponent } from './answer/answer.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnswerComponent,
    CheckComponent,

  ],
  imports: [
    CommonModule,
    CheckRoutingModule,
    FormsModule
  ]
})
export class CheckModule { }
