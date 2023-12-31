import { createAsync } from "@solidjs/router";
import { Index, createSignal } from "solid-js";
import { AnimatedCircle } from "~/components/decorations/AnimatedCircle";
import { PageBanner } from "~/components/layout/PageBanner/PageBanner";
import { StaffCard } from "~/components/sections/Staff/StaffCard";

import { getStaff } from "~/resources/staff";

export const route = {
  load: () => getStaff(),
};

export default function About() {
  const data = createAsync(getStaff, { deferStream: true });
  const [divRef1, setDivRef1] = createSignal<HTMLDivElement | null>(null);
  const [divRef2, setDivRef2] = createSignal<HTMLDivElement | null>(null);

  return (
    <main class="w-full flex flex-col relative">
      <PageBanner
        id="about"
        img="/img/about-us-cover.jpg"
        title="about|us"
        subTitle="Duo of inspiration and collaboration in the form of a friendly partnership created to freely bring bold ideas into life."
      />
      <div class="flex relative overflow-hidden lg:px-60">
        <AnimatedCircle divRef={divRef1} options={{ threshold: 0.3 }} />
        <AnimatedCircle
          cssClass="w-[180%] pb-[180%] lg:w-full lg:pb-[100%] top-full left-full -translate-x-1/2 -translate-y-1/2"
          divRef={divRef2}
          options={{ threshold: 0.1, rootMargin: "200px" }}
        />
        <div
          ref={setDivRef1}
          class="flex flex-col px-6 m-auto flex-1 max-w-6xl py-8 lg:py-16 gap-8 lg:gap-16"
        >
          <Index each={data()}>
            {(staffMember) => <StaffCard staffMember={staffMember} />}
          </Index>
        </div>
      </div>
      <div ref={setDivRef2} />
    </main>
  );
}
