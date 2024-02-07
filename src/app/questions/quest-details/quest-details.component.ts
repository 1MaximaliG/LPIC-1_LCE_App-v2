import { Component, OnInit } from '@angular/core';
import { Question } from '../../shared/question';
import { ActivatedRoute } from '@angular/router';
import { QuestMasterService } from 'src/app/shared/quest-master.service';
import { ResolverService } from 'src/app/shared/resolver.service';

@Component({
  selector: 'lpic1-quest-details',
  templateUrl: './quest-details.component.html',
  styleUrls: ['./quest-details.component.css']
})

export class QuestDetailsComponent implements OnInit{
  question? : Question;
  nquest? : Question;
  pquest? : Question;
  constructor(
    private service: QuestMasterService,
    private route: ActivatedRoute,
    public loesen: ResolverService,
  ) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {const id = param.get('id')!
    this.service.getSingle(id).subscribe(que => {this.question = que});
    this.service.getNext(id).subscribe(n => this.nquest = n);
    this.service.getPrevious(id).subscribe(p => this.pquest = p);

  });
  }



}
