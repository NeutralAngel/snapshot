import { Component, OnInit, Inject } from '@angular/core';
import { Item, SnapshotsService } from '../snapshots.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemVerificationComponent } from '../item-verification/item-verification.component';

@Component({
  selector: 'app-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css'],
})
export class ItemDetailModalComponent implements OnInit {
  item: string;
  picture: string;
  showCamera = false;
  itemForm: FormGroup;
  itemName: FormControl;
  description: FormControl;
  value: FormControl;
  purchaseDate: FormControl;
  serialNumber: FormControl;

  constructor(
    public dialogRef: MatDialogRef<ItemVerificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snapshotsService: SnapshotsService
  ) {}

  ngOnInit() {
    this.item = this.data.item;
    this.itemName = new FormControl('');
    this.description = new FormControl('');
    this.value = new FormControl('');
    this.purchaseDate = new FormControl('');
    this.serialNumber = new FormControl('');
    this.itemForm = new FormGroup({
      description: this.description,
      value: this.value,
      purchaseDate: this.purchaseDate,
      serialNumber: this.serialNumber,
      itemName: this.itemName,
    });
  }

  photoTaken(photo) {
    this.picture = photo;
  }

  save() {
    const item: Item = {
      id: this.snapshotsService.getSnapshot(this.data.snapshotId).items.length,
      name: this.item || this.itemName.value,
      imgDataUrl: this.picture,
      description: this.description.value,
      purchaseDate: this.purchaseDate.value,
      serialNumber: this.serialNumber.value,
      value: this.value.value,
    };
    console.log('item', item);
    this.snapshotsService.addItemToSnapshot(this.data.snapshotId, item);
    this.dialogRef.close();
  }
}
