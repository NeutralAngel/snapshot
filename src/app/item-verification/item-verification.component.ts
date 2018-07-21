import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-item-verification',
  templateUrl: './item-verification.component.html',
  styleUrls: ['./item-verification.component.css'],
})
export class ItemVerificationComponent implements OnInit {
  item: string;
  constructor(public dialogRef: MatDialogRef<ItemVerificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.item = this.data.item;
  }

  yes() {
    this.dialogRef.close({ response: true, item: this.item });
  }

  no() {
    this.dialogRef.close({ response: false, item: this.item });
  }
}
