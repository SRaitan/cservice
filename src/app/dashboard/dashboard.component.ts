import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';
import { CService } from '../c.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Metadata[] = [];

  constructor(private heroService: CService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getAllCs()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
