import { Component, OnInit } from '@angular/core';
import { Metadata } from '../metadata';
import { CService } from '../c.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  functions: Metadata[] = [];

  constructor(private cService: CService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.cService.getAllCs()
      .subscribe(funcList => this.functions = funcList.slice(0, 4));
  }

  funcs(): void {
    this.cService.funcs();
  }
}
