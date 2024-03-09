"use server"

import { Resend } from "resend"

export const sendMail = async (
    fname: string,
    lname: string,
    email: string,
    message: string
) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.RESEND_RECIEVER!,
            subject: 'New contact in website',
            html: `
        <h3>Somebody submitted a form </h3>
        <p>
        Name: ${fname} ${lname} <br />
        Email: ${email} <br />
        Message: ${message} <br /> 
        </p>`
        });
        return {
            success: true,
            message: "Thank you for contacting. I will reach out to you soon."
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong!"
        }
    }

}