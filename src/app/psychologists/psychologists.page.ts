import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';
import { Psychologist, PsychologistService } from '../services/psychologist.service';

@Component({
  selector: 'app-psychologists',
  templateUrl: './psychologists.page.html',
  styleUrls: ['./psychologists.page.scss'],
  standalone: true,
  imports: [...IONIC_STANDALONE_IMPORTS, CommonModule, FormsModule]
})
export class PsychologistsPage {
  psychologists: Psychologist[] = [];
  filtered: Psychologist[] = [];
  search = '';

  constructor(private service: PsychologistService, private router: Router) {
    this.load();
  }

  load() {
    this.service.getPsychologists().subscribe((data) => {
      this.psychologists = data;
      this.filter();
    });
  }

  filter() {
    const term = this.search.toLowerCase();
    this.filtered = this.psychologists.filter(p => p.name.toLowerCase().includes(term));
  }

  open(p: Psychologist) {
    this.router.navigate(['/psychologists', p.id]);
  }
}
