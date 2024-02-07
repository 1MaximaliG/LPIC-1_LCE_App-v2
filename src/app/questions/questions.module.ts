import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestListComponent } from './quest-list/quest-list.component';
import { QuestListItemComponent } from './quest-list-item/quest-list-item.component';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { QuestionsRoutingModule } from './questions-routing.module';


@NgModule({
  declarations: [
    QuestListComponent,
    QuestListItemComponent,
    QuestDetailsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
  ],
})
export class QuestionsModule { }
