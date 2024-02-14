import nodemailer from "nodemailer";
import fs from "fs";

interface Attachment {
  filename: string;
  path?: string;
  content?: string;
  contentType?: string;
}

interface Message {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments: Attachment[];
}

const nodeMailer = async (to: string, subject: string, html: string): Promise<void> => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "YourEmail",
      pass: "YourPasswordApp",
    },
  });

  const message: Message = {
    from: '"Tensorcode 👻" YourEmail',
    to: to,
    subject: subject,
    html: html,
    attachments: [
      {
        filename: "event.ics",
        content:
          "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\r\nBEGIN:VEVENT\r\nUID:12345\r\nDTSTAMP:20230428T120000Z\r\nDTSTART:20230510T140000Z\r\nDTEND:20230510T150000Z\r\nSUMMARY:Meeting with John Doe\r\nLOCATION:456 Main Street\r\nEND:VEVENT\r\nEND:VCALENDAR",
        contentType: "text/calendar",
      },
      {
        filename: "image.jpeg",
        path: "https://images.pexels.com/photos/16511744/pexels-photo-16511744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        filename: "git.zip",
        path: "https://github.com/youssef-of-web/state-municipality-tunisia/archive/refs/heads/main.zip",
      },
    ],
  };

  await transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("mail sent:" + info.response);
    }
  });
};

export default {
  nodeMailer,
};