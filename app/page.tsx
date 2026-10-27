import WeddingOpening from "@/components/WeddingOpening";
import WeddingHero from "@/components/WeddingHero";
import IntroSection from "@/components/IntroSection";
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import WeddingDetails from "@/components/WeddingDetails";
import ClosingSection from "@/components/ClosingSection";
import CinematicAutoScroll from "@/components/CinematicAutoScroll";

export default function Home() {
  return (
    <>
      <WeddingOpening />

      <CinematicAutoScroll />
      <main className="relative">
        <WeddingHero />
        <IntroSection />
        <StorySection />
        <GallerySection />
        <WeddingDetails />
        <ClosingSection />

        <div className="h-screen bg-[#f5efe6] p-10 text-black">
          TEST AUTO SCROLL
        </div>
      </main>
    </>
  );
}
