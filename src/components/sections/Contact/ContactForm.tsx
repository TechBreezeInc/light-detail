import { createEffect } from "solid-js";
import { Form } from "~/components/form";
import { useForm } from "~/components/form/signals";
import { SubmitButton } from "~/components/form/submit-button";
import { TextArea } from "~/components/form/text-area";
import { TextField } from "~/components/form/text-field";

export const ContactForm = () => {
  const form = useForm();

  return (
    <div class="mb-20">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        <TextField label="Name" {...form.register("name")} />
        <TextField label="Email" {...form.register("email")} />
        <TextField label="Subject" {...form.register("subject")} />
        <TextArea label="Message" {...form.register("message")} />
        <SubmitButton />
      </Form>
    </div>
  );
};
