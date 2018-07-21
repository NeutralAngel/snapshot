import { Component, OnInit } from '@angular/core';
import { SnapshotsService, Snapshot } from '../snapshots.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemVerificationComponent } from '../item-verification/item-verification.component';
import { ItemDetailModalComponent } from '../item-detail-modal/item-detail-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-snapshot-detail',
  templateUrl: './snapshot-detail.component.html',
  styleUrls: ['./snapshot-detail.component.css'],
})
export class SnapshotDetailComponent implements OnInit {
  snapshot: Snapshot;
  constructor(
    private route: ActivatedRoute,
    private snapshotService: SnapshotsService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.snapshot = this.snapshotService.getSnapshot(Number.parseInt(id));
    const objectLength = this.snapshot.objects.length;
    setTimeout(() => this.dialogs());
  }

  dialogs() {
    this.snapshotService.update();
    if (this.snapshot.objects.length > 0) {
      const dialogRef = this.dialog.open(ItemVerificationComponent, {
        height: '150px',
        width: '600px',
        data: { item: this.snapshot.objects.pop() },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result.response) {
          setTimeout(() => this.itemDetailModal(result.item));
        } else {
          this.dialogs();
        }
      });
    }
  }

  addNewItem() {
    setTimeout(() => this.itemDetailModal(''));
  }

  goToSnapshots() {
    this.router.navigate(['/snapshots']);
  }

  itemDetailModal(item) {
    const dialogRef = this.dialog.open(ItemDetailModalComponent, {
      height: '90vh',
      width: '98vw',
      data: { item: item, snapshotId: this.snapshot.id },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dialogs();
      console.log(`Dialog result: ${result}`);
    });
  }
}
