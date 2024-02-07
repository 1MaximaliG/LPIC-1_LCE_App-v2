import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../shared/question';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'lpic1-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  @Input() question?:Question;
  public examen: Question[] = [];

  constructor (private service: CheckService) {}

  ngOnInit(): void {
    this.service.getRandomQuestions(20).subscribe(questions =>
      { this.examen = questions;});
  }
}
