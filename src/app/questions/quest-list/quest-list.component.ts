import { Component} from '@angular/core';
import { Question } from '../../shared/question';
import { QuestMasterService } from 'src/app/shared/quest-master.service';

@Component({
  selector: 'lpic1-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent {
questions:Question[]=[];

constructor(private service: QuestMasterService) {
 (this.service.getAll().subscribe(
  que => { this.questions = que}
    ));
  }
}
