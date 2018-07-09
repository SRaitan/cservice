import {Injectable} from '@angular/core';
import {Metadata} from './metadata';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from "rxjs/internal/Observable";
import { catchError, map, tap } from 'rxjs/operators';
import {of} from "rxjs/internal/observable/of";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class CService {
  private channelServiceUrl = 'api/heroes';  // URL to web api

  getAllCs(): Observable<Metadata[]> {
     return this.http.get<Metadata[]>(this.channelServiceUrl)
      .pipe(catchError(this.handleError('getHeroes', [])));
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

  getChannelById(id: number): Observable<Metadata> {
    // TODO: send the message _after_ fetching the metadata
    const url = `${this.channelServiceUrl}/${id}`;
    return this.http.get<Metadata>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Metadata>(`getC id=${id}`))
    );
  }

  updateChannel (hero: Metadata): Observable<any> {
    return this.http.put(this.channelServiceUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateChannel'))
    );
  }

  private log(message: string) {
    this.messageService.add('CService: ' + message);
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }
}
