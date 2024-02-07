import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService {
private _isResolved$ = new BehaviorSubject(false);
readonly isResolved$ = this._isResolved$.asObservable();
get isResolved() {
  return this._isResolved$.value;
}
login(){
  this._isResolved$.next(true);
}
logout(){
  this._isResolved$.next(false);
}
}
