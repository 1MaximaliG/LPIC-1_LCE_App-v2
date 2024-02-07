import { Injectable, } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
//InMemoryDataService

//import * as Fragen  from 'src/assets/Lpic_Fragebkatalog/fragen.json';



@Injectable({
  providedIn: 'root'
})

export class QuestMasterService {

  private FragenURL = 'api/questions';
  private CheckURL = 'api/Check'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.FragenURL}`);
  }

  getSingle(id: string){
    return this.http.get<Question>(`${this.FragenURL}/${id}`);
  }
  getNext(id: string){
    return this.http.get<Question>(`${this.FragenURL}/${+id+1}`);
  }
  getPrevious(id: string){

    return this.http.get<Question>(`${this.FragenURL}/${+id-1}`);
  }
 }
