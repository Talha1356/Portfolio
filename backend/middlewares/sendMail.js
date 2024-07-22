// import { createTransport } from "nodemailer";

// export const sendMail = async (text) => {
//   const transporter = createTransport({
//     host: process.env.SMPT_HOST,
//     port: process.env.SMPT_PORT,
//     auth: {
//       user: process.env.SMPT_USER,
//       pass: process.env.SMPT_PASSWORD,
//     },
//   });

//   await transporter.sendMail({
//     subject: "CONTACT REQUEST FROM PORTFOLIO",
//     to: process.env.MYMAIL,
//     from: process.env.MYMAIL,
//     text,
//   });
// };

import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (text) => {
  try {
    const transporter = createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      secure: process.env.SMPT_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    await transporter.sendMail({
      subject: "CONTACT REQUEST FROM PORTFOLIO",
      to: process.env.MYMAIL,
      from: process.env.MYMAIL,
      text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};
