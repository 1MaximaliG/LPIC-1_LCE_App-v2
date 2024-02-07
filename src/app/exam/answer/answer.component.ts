import { Component , OnInit} from '@angular/core';
import { Question } from 'src/app/shared/question';
import { Router } from '@angular/router';
import { ExamComponent } from '../exam.component';

@Component({
  selector: 'lpic1-ex-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit{
  examListe : Question[] = [];
    multiTyp : boolean[] = []
    index = 0;
    eingabeM: boolean[] = [];
    eingabeS: number | undefined;
    eingabeT? : string;
    fehler = 0;

    constructor(private examC: ExamComponent, private router: Router) {}
    updateEingabeM(index: number, isChecked: boolean)
  {
    this.eingabeM[index] = isChecked;
  }

  ngOnInit(): void {
    this.index = 0;
  this.examListe = this.examC.examen;
//Algorithmus der in den multiTyp array einträgt ob eine element mit dem gleichen index mehr als eine antwort=true hat
  this.examListe.forEach( frage => {
     let n = 0;
    frage.antworten?.forEach(element => { if(element.istRichtig === true) { n++ }});
    if(n > 1){this.multiTyp[this.examListe.indexOf(frage)]=true}
      else{this.multiTyp[this.examListe.indexOf(frage)]=false}
});}

next(){
  let isCorrect = false;

  if (!this.examListe[this.index].fillin) {
    // Wenn es sich um Checkboxen handelt
    if (this.multiTyp[this.index]) {
      if (this.eingabeM) {
        let isAnyIncorrect = false;
        this.eingabeM.forEach((isSelected,i) => {
          const antwort = this.examListe[this.index].antworten?.[i];
          if (antwort && !antwort.istRichtig) {
            isAnyIncorrect = true;
          }
        });
        isCorrect = !isAnyIncorrect;
      }
    } else { // Wenn es sich um Radiobuttons handelt
      if (this.eingabeS !== undefined) {
        const antwort = this.examListe[this.index].antworten?.[this.eingabeS];
        if (antwort && antwort.istRichtig) {
          isCorrect = true;
        }
      }
    }
  } else { // Wenn es sich um ein Fill-In-Feld handelt
    if (this.eingabeT === this.examListe[this.index].fillin) {
      isCorrect = true;
    }
  }
if(isCorrect) {
if(this.index>9)window.alert('Herzlichen Glückwunsch!')
this.index++;
//this.Popup(isCorrect)// nur zum prüfen der funktionalität
}else{
this.Popup(false)
if(this.index > 0){
  this.index--;
  if(this.fehler<7){
    this.fehler++;
  }else{
    window.alert('Sie haben Sieben Fragen Falsch beantwortet, bitte versuchen sie es erneut!')
    this.router.navigateByUrl('/',{skipLocationChange: true}).then(() => {
      this.router.navigate([this.router.url]);
    })
  }
}
}


this.eingabeM=[];
this.eingabeS= undefined;
this.eingabeT = ""
  }


Popup(isCorrect: boolean){
  if (isCorrect){
    window.alert('Richtig!');//Fragment wird nicht verwendet
  }else{
    let message: string;
    if (this.examListe[this.index].fillin){
      message ='Falsch! Richtig Antwort: ' + this.examListe[this.index].fillin;
    }else{
      if(this.multiTyp[this.index] && this.eingabeM && this.eingabeM.length === 1) {
        message = 'Falsch! Es sind nicht alle richtigen Antworten gewählt worden';
      }else{
        const richtigeAntworten = this.examListe[this.index].antworten?.filter(a => a.istRichtig).map(a=>a.option);
        message = 'Falsch! Richtige Antwort*en: ' + richtigeAntworten?.join(', ');
      }
    }
    window.alert(message);
  }
}

back(){
  this.index--
}}


