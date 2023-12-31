import { PageBanner } from "~/components/layout/PageBanner/PageBanner";
import { LatestProjects } from "~/components/sections/LatestProjects/LatestProjects";
import { WorkFlow } from "~/components/sections/WorkFlow/WorkFlow";
import { getLatestProjects } from "~/resources/latestProjects";
import { createAsync } from "@solidjs/router";

export const route = {
  load: () => getLatestProjects(),
};

export default function Home() {
  const data = createAsync(getLatestProjects, { deferStream: true });

  return (
    <main class="w-full flex flex-col relative">
      <PageBanner
        id="home"
        img="/img/cover.jpg"
        title="our|mission"
        subTitle="iDesign Studio's mission is to design and implement functionally-aesthetically balanced spaces tailored to the client's personality traits."
      />

      <LatestProjects projects={data} />
      <WorkFlow />
    </main>
  );
}
