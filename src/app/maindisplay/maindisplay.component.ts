import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';
import { CService } from '../c.service';
import {Observable} from "rxjs/internal/Observable";
import {HEROES} from "../mock-heroes";
import {of} from "rxjs/internal/observable/of";

@Component({
  selector: 'app-maindisplay',
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {
  //hero : Metadata = {id:1, name: 'Thor'};
  heroes: Metadata[];
  selectedHero: Metadata;

  onSelect(hero: Metadata): void {
    this.selectedHero = hero;
  }
  constructor(private cservice: CService) {
  }

  getAllCs(): void {
    this.cservice.getAllCs()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getAllCs();
  }
}
