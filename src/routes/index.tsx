import { LatestProjects } from "~/components/sections/LatestProjects/LatestProjects";
import { WorkFlow } from "~/components/sections/WorkFlow/WorkFlow";
import { getLatestProjects } from "~/resources/projects";
import { createAsync } from "@solidjs/router";
import { Page } from "~/components/layout/Page";
import { Show, createMemo } from "solid-js";

export const route = {
  load: () => getLatestProjects(),
};

export default function Home() {
  const data = createAsync(getLatestProjects, {
    deferStream: true,
    initialValue: [],
  });

  const getDataWithPath = createMemo(() =>
    data()?.map((project) => ({
      ...project,
      path: `/interior-design/${project.id}`,
    }))
  );

  return (
    <Page id="home">
      <Show when={getDataWithPath()}>
        <LatestProjects projects={getDataWithPath()} />
      </Show>

      <WorkFlow />
    </Page>
  );
}
