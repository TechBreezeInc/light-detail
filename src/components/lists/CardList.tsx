import { For, Show } from "solid-js";
import { ProjectCard } from "./ProjectCard";
import { Project } from "~/types";
import clsx from "clsx";

type Props = {
  list: Project[];
};

export const CardList = (props: Props) => (
  <div class="flex flex-col gap-8 lg:flex-row lg:flex-wrap">
    <div class="h-[300px] flex items-center justify-end flex-1 min-w-[40%] relative">
      <div class="flex flex-col items-end justify-center gap-6 border-r-4 py-4 pr-4 border-black">
        <p class="text-right text-gray-500">scrool to see more</p>
      </div>
    </div>
    <For each={props.list}>
      {(item, index) => (
        <div
          class={clsx(
            "flex-1 min-w-[40%]",
            index() % 2 === 1 && "lg:-mb-[300px] lg:-translate-y-[300px]"
          )}
        >
          <ProjectCard {...item} />
        </div>
      )}
    </For>
    <Show when={props.list.length % 2 !== 1}>
      <div class="flex-1 min-w-[40%]" />
    </Show>
  </div>
);
