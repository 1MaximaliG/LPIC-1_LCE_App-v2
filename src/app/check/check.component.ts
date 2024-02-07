import { Component,Input, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/question';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'lpic1-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  @Input() question?:Question;
public checkers :Question[]=[];

constructor(private service: CheckService) {}

ngOnInit(): void {
  this.service.getRandomQuestions(10).subscribe(questions => { this.checkers = questions;
  });
}
//an den service ausgelagert
  // (this.service.getAll().subscribe(
  //   que => {this.checkers = que;}
  //     ));
  //     this.checkers.sort(() => Math.random() - 0.5)//shuffle

  //     this.checkers = this.checkers.map(value => ({ value, sort: Math.random() }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(({ value }) => value)//anderes Shuffle
  //     this.checkers=this.checkers. slice( 0 ,10 );// nur teil array
  //   }
  }
