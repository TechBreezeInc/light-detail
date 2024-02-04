import { JSX } from "solid-js";

type Props = {
  children: JSX.Element;
  onSubmit: JSX.EventHandler<HTMLFormElement, SubmitEvent>;
};

export const Form = (props: Props) => {
  return (
    <form onSubmit={props.onSubmit} class="flex flex-col gap-4">
      {props.children}
    </form>
  );
};
