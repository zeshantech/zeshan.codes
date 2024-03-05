import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  async sendEmail(data: Record<string, string>) {
    return this.http
      .post(`${environment.nodeServerUrl}/email`, data)
      .subscribe();
  }
}
