import { LatestProjects } from "~/components/sections/LatestProjects/LatestProjects";
import { WorkFlow } from "~/components/sections/WorkFlow/WorkFlow";
import { getLatestProjects } from "~/resources/projects";
import { createAsync } from "@solidjs/router";
import { Page } from "~/components/layout/Page";

export const route = {
  load: () => getLatestProjects(),
};

export default function Home() {
  const data = createAsync(getLatestProjects, { deferStream: true });

  return (
    <Page id="home">
      <LatestProjects projects={data} />
      <WorkFlow />
    </Page>
  );
}
