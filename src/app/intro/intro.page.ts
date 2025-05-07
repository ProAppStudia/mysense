import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';  // Додано імпорт CommonModule
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';
import { Router } from '@angular/router';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [...IONIC_STANDALONE_IMPORTS, CommonModule],  // Додано CommonModule
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this to avoid errors with web components
})
export class IntroPage {
  slidePosition = 0;
  totalSlides = 4;

  nextSlide() {
    if (this.slidePosition > -(this.totalSlides - 1) * 100) {
      this.slidePosition -= 100;
    }
  }

  prevSlide() {
    if (this.slidePosition < 0) {
      this.slidePosition += 100;
    }
  }
  constructor(private router: Router) {}

  skip() {
    this.router.navigate(['/tabs/tab1']);
  }
}