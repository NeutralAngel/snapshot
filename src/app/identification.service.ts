import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { RekognitionService } from './rekognition.service';

@Injectable()
export class IdentificationService {
  // this is a whitelist of allowable inventory matches
  // this would be thousands of items in a real application
  inventoryItems = [
    'Backpack',
    'Bed',
    'Beard',
    'Bedside Table',
    'Bicycle',
    'Bookcase',
    'Camera',
    'Chair',
    'Clock',
    'DVD/Bluray Player',
    'Desk',
    'Dresser',
    'Earrings',
    'Laptop',
    'Necklace',
    'Phone',
    'Ring',
    'Speakers',
    'Stereo',
    'Table',
    'Television',
  ];
  constructor(private rekognitionService: RekognitionService) {}

  getObjects(imgDataUrl: string) {
    return this.rekognitionService.detectLabels(imgDataUrl).then((labels: any) => {
      console.log('result from rekognition', labels);
      return this.inventoryItems.filter((i: string) => labels.map(l => l.Name).includes(i));
    });
  }
}
