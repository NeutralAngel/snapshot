import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  welcome = '';
  started = '';
  logo = 'https://s3.amazonaws.com/ifbi-hackathon/logo.jpg';
  constructor(private router: Router) {}

  ngOnInit() {
    this.showText('started', `Let's get started...`, 0);
  }

  showText(target: string, msg: string, index) {
    if (index < msg.length) {
      this[target] += msg[index++];
      setTimeout(() => {
        this.showText(target, msg, index);
      }, 150);
    } else {
      setTimeout(() => {
        this.router.navigate(['snapshots']);
      }, 2000);
    }
  }
}
