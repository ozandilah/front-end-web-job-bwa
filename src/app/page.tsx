import BannerSignUp from "@/components/organism/bannerSignUp";
import Category from "@/components/organism/category";
import Clients from "@/components/organism/clients";
import FeaturedJobs from "@/components/organism/featuredJob";
import Hero from "@/components/organism/hero";
import LatestJobs from "@/components/organism/latestJob";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <Hero />
      <Clients />
      <Category />
      <BannerSignUp />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
