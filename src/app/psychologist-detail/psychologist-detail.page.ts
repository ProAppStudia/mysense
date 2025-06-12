import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IONIC_STANDALONE_IMPORTS } from '../ionic-standalone-imports';
import { PsychologistService, Psychologist, SessionRequest } from '../services/psychologist.service';

@Component({
  selector: 'app-psychologist-detail',
  templateUrl: './psychologist-detail.page.html',
  styleUrls: ['./psychologist-detail.page.scss'],
  standalone: true,
  imports: [...IONIC_STANDALONE_IMPORTS, CommonModule]
})
export class PsychologistDetailPage {
  psychologist?: Psychologist;

  constructor(private route: ActivatedRoute, private service: PsychologistService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.service.getPsychologist(id).subscribe(p => this.psychologist = p);
    }
  }

  book() {
    if (!this.psychologist) return;
    const req: SessionRequest = { psychologistId: this.psychologist.id, date: new Date().toISOString() };
    this.service.bookSession(req).subscribe();
  }
}
