import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css'],
})
export class SnapshotComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('photo') photo: any;
  constructor() {}

  ngOnInit() {}
}
