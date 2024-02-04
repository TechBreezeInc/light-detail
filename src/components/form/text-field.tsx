import { JSX, createEffect } from "solid-js";

type TextFieldProps = {
  label: string;
  value: string;
  onInput: JSX.EventHandler<HTMLInputElement, InputEvent>;
};

export const TextField = (props: TextFieldProps) => {
  createEffect(() => {
    console.log(props.value, props.label);
  });

  return (
    <div class="flex border-b gap-4 pt-4 pb-2 mb-2 text-lg">
      <label>{props.label}</label>
      <input class="text-gray-500 outline-none" onInput={props.onInput} />
    </div>
  );
};
