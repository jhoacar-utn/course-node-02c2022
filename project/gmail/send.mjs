import { readFileSync } from 'fs';
import { createTransport } from 'nodemailer';
import { fileURLToPath } from 'url';

import 'dotenv/config';

// eslint-disable-next-line no-global-assign
const __dirname = fileURLToPath(new URL('.', import.meta.url));

if (process.argv.length < 2) {
  console.log('Its necessary the student information as console argument');
  process.exit(1);
}

if (
  !process.env.GMAIL_USERNAME
  || !process.env.GMAIL_PASSWORD
  || !process.env.STUDENTS
) {
  console.log('Its necessary environments variables for send gmails');
  process.exit(1);
}

let students = {};
try {
  students = JSON.parse(process.env.STUDENTS);
} catch (error) {
  console.log('Error parsing students as json');
  process.exit(1);
}

const student = process.argv.pop();

console.log(student);

if (!students[student]) {
  console.log('Error on obtain student from students json');
  process.exit(1);
}

const mailDestination = students[student];

const user = process.env.GMAIL_USERNAME;
const pass = process.env.GMAIL_PASSWORD;

// create reusable transporter object using the default SMTP transport
const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user,
    pass,
  },
});

await transporter.verify();

console.log('Ready to send gmails');

/**
 *
 * @param {string} string
 * @return {string}
 */
const normalizeName = (string) => string.split('_').map((name) => {
  const lowerCase = name.toLowerCase();
  return name.charAt(0).toUpperCase() + lowerCase.slice(1);
}).join(' ');

// send mail with defined transport object
const info = await transporter.sendMail({
  from: `"Jhoan Carrero 😁" <${user}>`, // sender address
  to: `${mailDestination}`, // list of receivers
  subject: `Felicidades ${normalizeName(student)} 🎉`, // Subject line
  text: 'Has aprobado la cursada!', // plain text body
  html: readFileSync(`${__dirname}/template.html`)
    .toString()
    .replaceAll('{{student}}', normalizeName(student)), // html body
});

console.log('Message sent: %s', info.messageId);
// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
