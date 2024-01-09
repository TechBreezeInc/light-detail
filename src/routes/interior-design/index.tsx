import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { Page } from "~/components/layout/Page";
import { InteriorDesignPortfolio } from "~/components/sections/InteriorDesignPortfolio";
import { getAllProjects } from "~/resources/projects";

export const route = {
  load: () => getAllProjects(),
};

export default function InteriorDesign() {
  const data = createAsync(getAllProjects, {
    deferStream: true,
    initialValue: [],
  });

  const getDataWithPath = () =>
    data().map((project) => ({
      ...project,
      path: `/interior-design/${project.id}`,
    }));

  return (
    <Page id="interior_design">
      <Show when={getDataWithPath().length}>
        <InteriorDesignPortfolio list={getDataWithPath()} />
      </Show>
    </Page>
  );
}
