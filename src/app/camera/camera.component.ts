import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  @ViewChild('video') video;
  @ViewChild('canvas') canvas;
  @Output() photo = new EventEmitter<any>();
  videoElement: HTMLVideoElement;
  photoData: any;

  constructor() {}

  ngOnInit() {
    this.videoElement = this.video.nativeElement;
    console.log(this.video);

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'environment' },
      })
      .then(stream => {
        this.videoElement.srcObject = stream;
      });
  }

  takePhoto() {
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    canvasElement.width = this.videoElement.offsetWidth;
    canvasElement.height = this.videoElement.offsetHeight;

    context.drawImage(this.videoElement, 0, 0, canvasElement.width, canvasElement.height);
    this.photoData = canvasElement.toDataURL('image/jpeg', 1.0);
    this.photo.emit(this.photoData);
  }

  resetPhoto() {
    this.photoData = null;
  }
}
