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
        "flex mt-10 last:mb-32",
        props.textPosition === StepCardTextPosition.RIGHT
          ? "flex-row"
          : "flex-row-reverse"
      )}
    >
      <div class="flex-1">
        <Show when={props.showHeaderTitle}>
          <h3 class="text-3xl font-bold">
            <span class="text-brandYellow">SO,</span> WHAT IF WE <br /> WORK
            TOGETHER?
          </h3>
        </Show>
      </div>
      <div class="w-[150px] aspect-square overflow-hidden rounded-md shadow-md">
        <img class="w-full h-full object-cover" src={props.img} />
      </div>
      <div class="flex-1 relative">
        <div
          class={clsx(
            "absolute bottom-0 left-0  w-full",
            props.textPosition === StepCardTextPosition.RIGHT
              ? "pl-[70px]"
              : "pr-[70px] text-right"
          )}
        >
          <p
            class={clsx(
              "absolute bottom-[35px] text-3xl -rotate-90 font-bold",
              props.textPosition === StepCardTextPosition.RIGHT
                ? "-left-[15px]"
                : "-right-[15px]"
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
