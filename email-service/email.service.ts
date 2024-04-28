import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'elbayaaahmed845@gmail.com',
    pass: 'your-email-password' // using dotenv is recommended 
  }
});

app.post('/send-email', (req, res) => {
  // Implement email sending logic here
  res.json({ message: 'Email sent successfully' });
});

app.listen(port, () => {
  console.log(`Email service listening at http://localhost:${port}`);
});
