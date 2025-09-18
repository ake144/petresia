import HeroGeometric from "@/components/hero-section";
import { JoinUsSection } from "@/components/join-us-section";
import { PressSection } from "@/components/pres-section";
import { ResourcesSection } from "@/components/resources";
import { RoadMap } from "@/components/roadmap";
import { Teams } from "@/components/team";
import { MissionPage } from "@/components/vision";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroGeometric  />
      <MissionPage  />
      <Teams  />
      <RoadMap  />
      <ResourcesSection  />
      <PressSection  />
      <JoinUsSection  />
    </div>
  );
}
