import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PsychologistDetailPage } from './psychologist-detail.page';
import { PsychologistService } from '../services/psychologist.service';

describe('PsychologistDetailPage', () => {
  let component: PsychologistDetailPage;
  let fixture: ComponentFixture<PsychologistDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PsychologistDetailPage, HttpClientTestingModule],
      providers: [PsychologistService, { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }]
    }).compileComponents();

    fixture = TestBed.createComponent(PsychologistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
