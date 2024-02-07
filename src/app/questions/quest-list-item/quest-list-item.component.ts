import { Component,Input } from '@angular/core';
import { Question } from '../../shared/question';

@Component({
  selector: 'lpic1-quest-list-item',
  templateUrl: './quest-list-item.component.html',
  styleUrls: ['./quest-list-item.component.css']
})
export class QuestListItemComponent {
  @Input() question?: Question;
}
