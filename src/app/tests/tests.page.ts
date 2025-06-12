import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
  standalone: true,
  imports: [...IONIC_STANDALONE_IMPORTS, CommonModule]
})
export class TestsPage {
  constructor(private router: Router) {}

  start() {
    this.router.navigate(['/psychologists']);
  }
}
