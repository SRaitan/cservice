import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-maindisplay',
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {
  //hero : Metadata = {id:1, name: 'Thor'};
  heroes = HEROES;
  selectedHero: Metadata;

  onSelect(hero: Metadata): void {
    this.selectedHero = hero;
  }
  constructor() {
  }

  ngOnInit() {

  }
}
