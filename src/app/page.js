import FeaturedComp from "@/components/HomeComp/FeaturedComp";
import HeroSection from "@/components/HomeComp/HeroSection";
import RecentPost from "@/components/HomeComp/RecentPost";
import Image from "next/image";


export default function Home() {
  return (
   <section className="h-full flex flex-col items-center w-full gap-6">
    <HeroSection />
    <RecentPost />
    <FeaturedComp />
    
   </section>
  );
}
