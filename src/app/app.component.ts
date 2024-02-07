import { Component } from '@angular/core';
import { ResolverService } from './shared/resolver.service';

@Component({
  selector: 'lpic1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public loesen: ResolverService){}
  title = 'LPIC-1_LCE_App-v2';
}
