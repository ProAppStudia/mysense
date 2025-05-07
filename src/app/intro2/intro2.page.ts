import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicSlides } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
  standalone: true,
  imports: [...IONIC_STANDALONE_IMPORTS, CommonModule],  // Додано CommonModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this to avoid errors with web components
})

export class Intro2Page implements OnInit {
  swiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {
  }

}
