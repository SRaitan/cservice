import { Component, OnInit, Input } from '@angular/core';
import { Metadata } from '../metadata';

@Component({
  selector: 'app-metadata-details',
  templateUrl: './metadata-details.component.html',
  styleUrls: ['./metadata-details.component.css']
})
export class MetadataDetailsComponent implements OnInit {
  @Input() hero: Metadata;
  constructor() {
  }

  ngOnInit() {
  }

}
