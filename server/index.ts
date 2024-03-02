import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import Mail = require('nodemailer/lib/mailer');

dotenv.config();

const app = express();
const port = 8080;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST endpoint to send email
app.post('/email/contact-form', (req, res) => {
  let tableRows = '';
  for (const field in req.body) {
    tableRows += `
      <tr>
        <td><b>${field}</b></td>
        <td>${req.body[field]}</td>
      </tr>
    `;
  }

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: 'zgaya.hub@gmail.com',
    subject: 'Contact form submission',
    html: `
      <h2>Contact Form Submission</h2>
      <table border="1">
        ${tableRows}
      </table>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
