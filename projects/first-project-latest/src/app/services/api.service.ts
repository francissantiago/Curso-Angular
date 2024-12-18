import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: string;
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Angular >= 17
  public name = signal('Francis Santiago');

  // Angular < 17
  public name$ = new BehaviorSubject('Francis Santiago $');

  // Angular < 17
  // constructor(
  //   private _http: HttpClient
  // ) { }

  // Angular > 17
  #http = inject(HttpClient);
  #url = signal(environment.apiTask)

  #setListTask = signal<ITask[] | null>(null);
  get getListTask() {
    return this.#setListTask.asReadonly();
  }

  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url()).pipe(
      shareReplay(),
      tap((res) => this.#setListTask.set(res))
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }

  public httpTaskId$(id: string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}/${id}`).pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }
}
