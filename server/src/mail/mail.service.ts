import { MessageOutput } from '../common/CommonOutput.dto';
import transporter from '../common/MailTransporter';

export class MailService {
  async sendContactDetailsToOwner(details: Record<string, string | number | boolean>[], email: string): Promise<MessageOutput> {
    let tableRows = '';
    for (const field in details) {
      tableRows += `
        <tr>
          <td><b>${field}</b></td>
          <td>${details[field]}</td>
        </tr>
      `;
    }

    transporter.sendMail({
      from: email,
      to: 'zeshanshakil0@gmail.com',
      subject: 'Contact form submission',
      html: `
          <h2>Contact Form Submission</h2>
          <table border="1">
            ${tableRows}
          </table>
        `,
    });

    return { message: '' };
  }
}
