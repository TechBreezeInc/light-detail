import { LatestProjects } from "~/components/sections/LatestProjects/LatestProjects";
import { WorkFlow } from "~/components/sections/WorkFlow/WorkFlow";
import { getLatestProjects } from "~/resources/projects";
import { createAsync } from "@solidjs/router";
import { Page } from "~/components/layout/Page";
import { Show } from "solid-js";
import { Project } from "~/types";

export const route = {
  load: () => getLatestProjects(),
};

export default function Home() {
  const data = createAsync(() => getLatestProjects(), {
    deferStream: true,
  });

  const getDataWithPath = () =>
    data()?.map((project: Project) => ({
      ...project,
      path: `/interior-design/${project.id}`,
    })) || [];

  return (
    <Page id="home">
      <Show when={getDataWithPath().length > 0}>
        <LatestProjects projects={getDataWithPath()} />
      </Show>

      <WorkFlow />
    </Page>
  );
}
