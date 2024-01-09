import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { ProjectPage } from "~/components/sections/ProjectPage";
import { getProjectsById } from "~/resources/projects";
import { Project } from "~/types";

export const route = {
  load: (props: { params: { id: string } }) => {
    return getProjectsById(props.params.id);
  },
};

export default function InteriorDesignProject(props: {
  params: { id: string };
}) {
  const data = createAsync<Project>(() => getProjectsById(props.params.id), {
    deferStream: true,
  });

  return (
    <Show when={data()}>
      <ProjectPage project={data()!} />
    </Show>
  );
}
