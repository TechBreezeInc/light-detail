import { SendEmailParams, SendEmailResponse } from "~/api/types";
import emailjs from "emailjs-com";

export const sendEmail = (
  params: SendEmailParams
): Promise<SendEmailResponse> =>
  new Promise((resolve, reject) => {
    emailjs
      .send(
        "service_q49d5np",
        "contact_form",
        {
          name: params.name,
          mail: params.email,
          subject: params.subject,
          message: params.content,
          to_email: "stefan.radusi@tech-breeze.com",
        },
        "user_xlyLUbENywvyi5Vh77nQj"
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
