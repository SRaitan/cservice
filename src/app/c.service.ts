import { Injectable } from '@angular/core';
import { Metadata } from './metadata';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class CService {
  getAllCs(): Observable<Metadata[]> {
    this.messageService.add('CService: fetched cs');
    return of(HEROES);
  }

  getC(id: number): Observable<Metadata> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched by id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) {
  }
}
