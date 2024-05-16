import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import jsPDF from 'jspdf';
import { v4 as uuidv4 } from 'uuid';
import { ID, awStorage } from '../../lib/appwrite';

@Injectable({
  providedIn: 'root',
})
export class OfferModalService {
  constructor(private http: HttpClient) {}

  async sendPDFViaWhatsApp(pdfUrl: string) {
    const message = `Here's your offer PDF: ${pdfUrl}`;

    const accountSid = 'AC83cc12670cf6c3dc496749bb697df219';
    const authToken = 'cd08d56f72220dc96eb1693935879886';

    // const twilioUrl =
    //   'https://api.twilio.com/2010-04-01/Accounts/AC83cc12670cf6c3dc496749bb697df219/Messages.json';

    // const body = new FormData();
    // body.append('To', '+923064547910');
    // body.append('From', '+14155238886');
    // body.append('Body', message);
    // body.append('MediaUrl', pdfUrl);

    // const headers = {
    //   Authorization:
    //     'Basic ' +
    //     btoa(
    //       'AC83cc12670cf6c3dc496749bb697df219:cd08d56f72220dc96eb1693935879886'
    //     ),
    // };
    // console.log(body, headers, twilioUrl);

    // return this.http.post(twilioUrl, s, { headers });
  }

  generatePdf(data: Record<string, string>): File {
    const doc = new jsPDF();

    const titles = Object.keys(data);
    const content = Object.values(data);
    console.log(content);

    doc.text(titles, 10, 10);
    doc.text(content, 100, 10);

    return new File([doc.output('blob')], 'generated_pdf.pdf', {
      type: 'application/pdf',
    });
  }

  async getFileUrl(ID: string) {
    const result = awStorage.getFile(
      environment.appwrite.clientOffersBucketID,
      ID
    );

    return result;
  }

  async uploadPdfToCloud(file: File): Promise<string | void> {
    try {
      const { $id } = await awStorage.createFile(
        environment.appwrite.clientOffersBucketID,
        ID.unique(),
        file
      );

      const publicUrl = await this.getFileUrl($id);

      console.log(publicUrl);

      // const { data, error } = await this.supabase.storage
      //   .from('offers')
      //   .upload(`${uuidv4()}.pdf`, file);

      // if (error) {
      //   throw error;
      // }

      // const {
      //   data: { publicUrl },
      // } = this.supabase.storage.from('offers').getPublicUrl(data.path);

      return 'publicUrl';
    } catch (error) {
      alert((error as Error).message);
    }
  }
}
