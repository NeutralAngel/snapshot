import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { SnapshotListComponent } from './snapshot-list/snapshot-list.component';
import { CameraComponent } from './camera/camera.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { IdentificationService } from './identification.service';
import { RekognitionService } from './rekognition.service';
import { SnapshotsService } from './snapshots.service';
import { SnapshotDetailComponent } from './snapshot-detail/snapshot-detail.component';
import { ItemVerificationComponent } from './item-verification/item-verification.component';
import { ItemDetailModalComponent } from './item-detail-modal/item-detail-modal.component';
import { ItemComponent } from './item/item.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'snapshots',
    component: SnapshotListComponent,
  },
  {
    path: 'snapshot/:id',
    component: SnapshotDetailComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SnapshotListComponent,
    CameraComponent,
    SnapshotComponent,
    SnapshotDetailComponent,
    ItemVerificationComponent,
    ItemDetailModalComponent,
    ItemComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [IdentificationService, RekognitionService, SnapshotsService],
  bootstrap: [AppComponent],
  entryComponents: [ItemVerificationComponent, ItemDetailModalComponent],
})
export class AppModule {}
