import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('item') item;
  logo = 'https://s3.amazonaws.com/ifbi-hackathon/logo.jpg';

  constructor() {}

  ngOnInit() {}
}
