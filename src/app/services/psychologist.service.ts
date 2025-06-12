import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Psychologist {
  id: number;
  name: string;
  specialization: string;
  description: string;
}

export interface SessionRequest {
  psychologistId: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class PsychologistService {
  private apiUrl = 'https://example.com/api';

  constructor(private http: HttpClient) {}

  getPsychologists(): Observable<Psychologist[]> {
    return this.http.get<Psychologist[]>(`${this.apiUrl}/psychologists`);
  }

  getPsychologist(id: number): Observable<Psychologist> {
    return this.http.get<Psychologist>(`${this.apiUrl}/psychologists/${id}`);
  }

  bookSession(request: SessionRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/sessions`, request);
  }
}
