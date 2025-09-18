import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function RoadMap() {
  const data = [
  {
    title: "Phase I — Planetary Public Supercomputer (2025–2027)",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal  md:text-2xl text-neutral-200">
          Donated compute across nations; verifiable orchestration via the
          Petresia Protocol; pilots with universities, public agencies, and
          partners.
        </p>
      </div>
    ),
  },
  {
    title: "Phase II — Orbital Archives (2028–2032)",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal  md:text-2xl text-neutral-200">
          Resilient storage of models, charters, and protocol artifacts on
          orbital platforms; censorship-resistant, globally accessible
          references.
        </p>
      </div>
    ),
  },
  {
    title: "Phase III — Cosmic Commons (2035+)",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal md:text-2xl text-neutral-200">
          Long-term archives on lunar/deep-space infrastructure—intelligence
          preserved beyond terrestrial risk horizons for future generations.
        </p>
      </div>
    ),
  },
];

  return (
    <div className="relative w-full overflow-clip" id="roadmap">
      <Timeline data={data} />
    </div>
  );
}
