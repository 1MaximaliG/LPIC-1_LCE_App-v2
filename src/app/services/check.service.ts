import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Question } from '../shared/question';
import { QuestMasterService } from '../shared/quest-master.service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private questMasterservice: QuestMasterService) { }
  getShuffledQuestions(): Observable<Question[]> {
    return this.questMasterservice.getAll().pipe(
      map(array => {
        // Mischen der Fragen
        array.sort(() => Math.random() - 0.5);

        // Andere Mischvariante
        array = array.map(value => ({ value, sort: Math.random() }))
                     .sort((a, b) => a.sort - b.sort)
                     .map(({ value }) => value);

        return array; // Rückgabe des gemischten Arrays
      })
    );
  }
getRandomQuestions(count: number): Observable<Question[]>{
  return this.getShuffledQuestions().pipe(map(array => array.slice(0, count)))
}
}

//ursprünglich aus Check.component
  // (this.service.getAll().subscribe(
  //   que => {this.checkers = que;}
  //     ));
  //     this.checkers.sort(() => Math.random() - 0.5)//shuffle

  //     this.checkers = this.checkers.map(value => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value)//anderes Shuffle
  //     this.checkers=this.checkers. slice( 0 ,10 );// nur teil array
  //   }
