import clsx from "clsx";
import "./PageBanner.css";
import { Show } from "solid-js";

type Props = {
  id: string;
  img: string;
  title: string;
  subTitle?: string;
};

export const PageBanner = (props: Props) => {
  const splitTitle = () => props.title.split("|");

  const getTextSize = (text: string) => {
    if (text.length > 7) {
      return "text-4xl";
    }

    return "text-7xl";
  };

  return (
    <section
      id={props.id}
      class="w-full h-screen overflow-hidden relative page-banner"
    >
      <div class="w-full h-full absolute top-0 left-0">
        <img
          src={props.img}
          alt="banner-image"
          class="w-full h-full object-cover"
        />
        <div class="absolute w-full h-full top-0 left-0 bg-black opacity-60" />
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[2px] max-w-full">
        <div class="relative">
          <div class="overflow-hidden overflowHandle">
            <h1
              class={clsx(
                "uppercase text-center text-yellow-500 lg:text-8xl font-semibold text-shadow moveBannerTextTop",
                getTextSize(splitTitle()[0])
              )}
            >
              {splitTitle()[0]}
            </h1>
          </div>
          <div class="bg-white w-full h-[4px] rounded-md scaleDivider" />
          <div class="overflow-hidden overflowHandle">
            <h1
              class={clsx(
                "uppercase text-center text-white lg:text-8xl font-semibold text-shadow z-10 relative moveBannerTextBottom",
                getTextSize(splitTitle()[1])
              )}
            >
              {splitTitle()[1]}
            </h1>
          </div>
        </div>

        <Show when={props.subTitle}>
          <div class="translate-y-[-0px] lg:translate-y-[-20px] fadeIn">
            <p class="text-center text-white text-xl lg:text-2xl font-thin">
              {props.subTitle}
            </p>
          </div>
        </Show>
      </div>
    </section>
  );
};
