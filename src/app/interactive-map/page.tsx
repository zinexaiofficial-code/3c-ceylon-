import React from "react";
import { InteractiveSriLankaMap } from "@/components/home/InteractiveSriLankaMap";

export const metadata = {
  title: "Interactive Sri Lanka Tourism Map | 3C Ceylon Tours",
  description: "Explore Sri Lanka's popular beaches, wildlife sanctuaries, historical citadels, adventure hubs, and culinary hotspots on our interactive island map."
};

export default function InteractiveMapPage() {
  return (
    <main className="min-h-screen bg-[#020407] pt-20 pb-20 text-white">
      <InteractiveSriLankaMap />
    </main>
  );
}
