import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PsychologistsPage } from './psychologists.page';
import { PsychologistService } from '../services/psychologist.service';

describe('PsychologistsPage', () => {
  let component: PsychologistsPage;
  let fixture: ComponentFixture<PsychologistsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PsychologistsPage, HttpClientTestingModule],
      providers: [PsychologistService]
    }).compileComponents();

    fixture = TestBed.createComponent(PsychologistsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
