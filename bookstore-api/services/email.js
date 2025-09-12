import { createTransport } from "nodemailer";

const transporter = createTransport({
    port: Number(process.env.EMAIL_PORT),
    host: process.env.EMAIL_HOST,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export default transporter;
