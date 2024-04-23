import { HomeSection } from "@/components/landing/HomeSection";
import { NavBar } from "@/components/shared/nav-bar";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="  relative flex grow flex-col items-center justify-center ">
      <div className="w-full absolute overflow-hidden inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
        <HomeSection />
      </div>
    </div>
  );
}
