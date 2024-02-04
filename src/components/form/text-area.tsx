import { JSX, createEffect } from "solid-js";

type TextAreaProps = {
  label: string;
  value: string;
  onInput: JSX.EventHandler<HTMLTextAreaElement, InputEvent>;
};

export const TextArea = (props: TextAreaProps) => {
  createEffect(() => {
    console.log(props.value, props.label);
  });

  return (
    <div class="flex flex-col border-b gap-2">
      <label>{props.label}</label>
      <textarea
        class="h-20 outline-none text-gray-500"
        onInput={props.onInput}
      />
    </div>
  );
};
