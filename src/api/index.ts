"use server";

import { SendEmailParams, SendEmailResponse } from "./types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const sendEmail = async (
  payload: SendEmailParams
): Promise<SendEmailResponse> => {
  console.log(payload);

  await delay(3000);
  // throw Error("This is an error from the server!");

  return { msg: "Hello from the server!" };
};
