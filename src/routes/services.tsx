import { Page } from "~/components/layout/Page";
import { Section } from "~/components/layout/Section";
import { SectionHeader } from "~/components/layout/Section/SectionHeader";
import { AnimatedCircle } from "~/components/decorations/AnimatedCircle";
import { For, createSignal } from "solid-js";
import { ProposalCard } from "~/components/sections/Services/ProposalCard";
import { proposals } from "~/components/sections/Services/proposals";
import { VisualizationsServices } from "~/components/sections/Services/VisualizationsServices";

export default function Services() {
  const [divRef, setDivRef] = createSignal<HTMLDivElement | null>(null);

  return (
    <Page id="services">
      <Section
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
          title="CHECK OUT OUR OFFERS"
          subTitle="We mainly offer interior design services, but at your request over
            the past years we figured the need to design 3 types of
            deals/offers/packages/proposals according to your needs:"
        />
        <div class="flex flex-col gap-6 lg:flex-row">
          <For each={proposals}>
            {(proposal) => <ProposalCard {...proposal} />}
          </For>
        </div>
      </Section>
      <VisualizationsServices />
    </Page>
  );
}
