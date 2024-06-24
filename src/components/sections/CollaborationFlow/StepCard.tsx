import clsx from "clsx";
import { Show } from "solid-js";

export enum StepCardTextPosition {
  LEFT = "left",
  RIGHT = "right",
}

type Props = {
  title: string;
  subTitle: string;
  description: string;
  img: string;
  textPosition: StepCardTextPosition;
  showHeaderTitle?: boolean;
};

export const StepCard = (props: Props) => {
  return (
    <div
      class={clsx(
        "flex flex-col mt-10 last:mb-32 lg:flex-row",
        props.textPosition === StepCardTextPosition.RIGHT
          ? "lg:flex-row"
          : "lg:flex-row-reverse"
      )}
    >
      <div class="flex-1 mb-5 lg:mb-0">
        <Show when={props.showHeaderTitle}>
          <h3 class="text-3xl font-bold">
            <span class="text-brandYellow">SO,</span> WHAT IF WE <br /> WORK
            TOGETHER?
          </h3>
        </Show>
      </div>
      <div class="mb-5 lg:mb-0 w-full h-32 lg:w-[150px] lg:h-auto lg:aspect-square overflow-hidden rounded-md shadow-md">
        <img
          class="w-full h-full object-cover object-bottom lg:object-center"
          src={props.img}
        />
      </div>
      <div class="flex-1 relative ">
        <div
          class={clsx(
            "lg:absolute bottom-0 left-0  w-full flex flex-col gap-3",
            props.textPosition === StepCardTextPosition.RIGHT
              ? "lg:pl-[70px]"
              : "lg:pr-[70px] lg:text-right"
          )}
        >
          <p
            class={clsx(
              "lg:absolute -top-10 lg:top-unset lg:bottom-[35px] text-3xl lg:-rotate-90 font-bold ",
              props.textPosition === StepCardTextPosition.RIGHT
                ? "lg:-left-[15px]"
                : "lg:-right-[15px]"
            )}
          >
            {props.title}
          </p>
          <p>{props.subTitle}</p>
          <p class="text-gray-500">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
