import { JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
  decorations?: JSXElement;
};

export const Section = (props: Props) => {
  return (
    <section class="w-full flex relative lg:px-48">
      {props.decorations}
      <div class="flex flex-col px-6 m-auto flex-1 max-w-6xl min-h-screen gap-8 py-[40px] lg:py-[100px] lg:gap-16 overflow-hidden">
        {props.children}
      </div>
    </section>
  );
};
