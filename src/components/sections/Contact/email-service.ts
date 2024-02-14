import { SendEmailParams, SendEmailResponse } from "~/api/types";
import emailjs from "emailjs-com";

const emailService = import.meta.env.VITE_EMAIL_JS_SERVICE;
const formTemplate = import.meta.env.VITE_EMAIL_JS_FORM;
const emailServiceUser = import.meta.env.VITE_EMAIL_JS_USER;
const toEmail = import.meta.env.VITE_EMAIL_JS_RECEIVER;

export const sendEmail = (
  params: SendEmailParams
): Promise<SendEmailResponse> =>
  new Promise((resolve, reject) => {
    emailjs
      .send(
        emailService,
        formTemplate,
        {
          name: params.name,
          mail: params.email,
          subject: params.subject,
          message: params.content,
          to_email: toEmail,
        },
        emailServiceUser
      )
      .then(
        (result) => {
          console.log(result);

          resolve(result.text);
        },
        (error) => {
          console.log(error);
          reject(error.text);
        }
      );
  });
