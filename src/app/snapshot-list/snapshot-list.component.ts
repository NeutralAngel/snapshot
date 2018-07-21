import { Component, OnInit } from '@angular/core';
import { SnapshotsService } from '../snapshots.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snapshot-list',
  templateUrl: './snapshot-list.component.html',
  styleUrls: ['./snapshot-list.component.css'],
})
export class SnapshotListComponent implements OnInit {
  snapshots;
  addNew = false;
  constructor(public snapshotsService: SnapshotsService, private router: Router) {}

  ngOnInit() {
    this.snapshots = this.snapshotsService.snapshots;
  }

  photoTaken(photo) {
    this.snapshotsService.save(photo).then(() => {
      this.router.navigate(['/snapshot', this.snapshots.length - 1]);
    });
  }

  goToSnapshot(snapshot) {
    this.router.navigate(['/snapshot', snapshot.id]);
  }
}
