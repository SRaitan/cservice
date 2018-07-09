import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Metadata} from '../metadata';
import {CService} from '../c.service';

@Component({
  selector: 'metadata-details',
  templateUrl: './metadata-details.component.html',
  styleUrls: ['./metadata-details.component.css']
})
export class MetadataDetailsComponent implements OnInit {
  @Input() metadata: Metadata;

  constructor(
    private route: ActivatedRoute,
    private cService: CService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getC();
  }

  getC(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cService.getChannelById(id)
      .subscribe(func => this.metadata = func);
  }

  save(): void {
    this.cService.updateChannel(this.metadata)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
