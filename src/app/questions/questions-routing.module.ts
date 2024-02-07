import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestDetailsComponent } from './quest-details/quest-details.component';
import { QuestListComponent } from './quest-list/quest-list.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestListComponent,
  },
  {
    path: 'questions/:id',
    component: QuestDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
