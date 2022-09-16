import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public showNavigationArrows = false;
  public showNavigationIndicators = false;
  public images: any;

  constructor() {
    this.images = [62, 83].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;

  ngOnInit(): void {}
}
