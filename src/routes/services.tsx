import { Page } from "~/components/layout/Page";
import { Section } from "~/components/layout/Section";
import { SectionHeader } from "~/components/layout/Section/SectionHeader";
import { AnimatedCircle } from "~/components/decorations/AnimatedCircle";
import { For, createSignal } from "solid-js";
import { ProposalCard } from "~/components/sections/Services/ProposalCard";
import { proposals } from "~/components/sections/Services/proposals";
import { VisualizationsServices } from "~/components/sections/Services/VisualizationsServices";
import { CollaborationFlow } from "~/components/sections/CollaborationFlow";

export default function Services() {
  const [divRef, setDivRef] = createSignal<HTMLDivElement | null>(null);

  return (
    <Page id="services">
      <Section
        class="pt-8 lg:mb-28"
        decorations={
          <div
            class="absolute top-1 left-0 w-full h-full -z-10"
            ref={setDivRef}
          >
            <AnimatedCircle divRef={divRef} options={{ threshold: 0.3 }} />
          </div>
        }
      >
        <SectionHeader
          title="Discover the right pack for you"
          subTitle="We offer 3 tailored service packages designed to meet a variety of needs, lifestyles, and budgets. Whether you're looking for a solid design foundation, personalized guidance during implementation, or a fully managed, stress-free transformation, we’ve got you covered. Explore our offerings below to find the perfect fit for your project."
        />
        <div class="flex gap-6 pb-4 overflow-x-auto no-scrollbar">
          <For each={proposals}>
            {(proposal) => <ProposalCard {...proposal} />}
          </For>
        </div>
      </Section>
      <VisualizationsServices />
      <CollaborationFlow />
    </Page>
  );
}
