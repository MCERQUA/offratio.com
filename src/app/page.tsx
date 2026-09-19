import EntranceGate from "@/components/EntranceGate";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Hero,
  Manifesto,
  Categories,
  MoodStrip,
  EpisodesTeaser,
  HostTeaser,
  SubscribeCta,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <EntranceGate>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Manifesto />
        <Categories />
        <MoodStrip />
        <EpisodesTeaser />
        <HostTeaser />
        <SubscribeCta />
      </main>
      <SiteFooter />
    </EntranceGate>
  );
}
