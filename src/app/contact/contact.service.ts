import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { awFunction } from '../lib/appwrite';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  async sendEmail(data: Record<string, string>) {
    const promise = await awFunction.createExecution(
      '664603cd0023d846ae1b',
      JSON.stringify({ hi: '' }),
      true // async (optional)
    );
    console.log(promise.$id);

    // functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object

    // return this.http
    //   .post(
    //     `${environment.nodeServerUrl}/mail/send-contact-details-to-owner`,
    //     data
    //   )
    //   .subscribe();
  }
}
