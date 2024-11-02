import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  // Angular >= 17
  public name = signal('Francis Santiago');

  // Angular < 17
  public name$ = new BehaviorSubject('Francis Santiago $');

  constructor() { }
}
