import { Injectable } from '@angular/core';
import { IdentificationService } from './identification.service';

@Injectable()
export class SnapshotsService {
  snapshots: Snapshot[] = [];

  constructor(private identificationService: IdentificationService) {
    this.snapshots = JSON.parse(sessionStorage.getItem('snapshots')) || [];
  }

  save(imgDataUrl: string) {
    return this.identificationService.getObjects(imgDataUrl).then(objs => {
      this.snapshots.push({ id: this.snapshots.length, imgDataUrl: imgDataUrl, objects: objs, items: [] });
      sessionStorage.setItem('snapshots', JSON.stringify(this.snapshots));
    });
  }

  getSnapshot(id: number) {
    return this.snapshots.find(s => s.id === id);
  }

  update() {
    sessionStorage.setItem('snapshots', JSON.stringify(this.snapshots));
  }

  addItemToSnapshot(id: number, item: Item) {
    this.snapshots.find(s => s.id === id).items.push(item);
    this.update();
  }
}

export class Snapshot {
  id: number;
  imgDataUrl: string;
  objects: string[];
  items: Item[];
}

export class Item {
  id: number;
  imgDataUrl?: string;
  name?: string;
  description?: string;
  value?: number;
  purchaseDate?: Date;
  serialNumber?: string;
}
