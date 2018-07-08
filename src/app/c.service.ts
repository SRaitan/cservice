import {Injectable} from '@angular/core';
import {Metadata} from './metadata';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import {Observable} from "rxjs/internal/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class CService {
  private mainUrl = 'api/heroes';  // URL to web api

  getAllCs(): Observable<Metadata[]> {
     return this.http.get<Metadata[]>(this.mainUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getC(id: number): Observable<Metadata> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this.mainUrl}/${id}`;
    return this.http.get<Metadata>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Metadata>(`getC id=${id}`))
    );
  }

  updateHero (hero: Metadata): Observable<any> {
    return this.http.put(this.mainUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    this.messageService.add('CService: ' + message);
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }
}
