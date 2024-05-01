import Image from "next/image";
import React from "react";
import FormSearch from "../formSearch";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-1/2">
        <div className="text-7xl font-semibold text-slate-600 w-max relative">
          Discover <br /> more than <br />
          <span className="text-primary">5000+ Jobs</span>
        </div>
        <Image
          src="/images/pattern2.png"
          alt="/images/pattern2.png"
          width={455}
          height={32}
          className="mb-5"
        />
        <div className="text-muted-foreground text-lg">
          Great platform for the job seeker that searching for <br /> new career
          height and passionate about startup
        </div>
        <FormSearch />
      </div>
      <div className="block mt-2">
        <Image
          src="/images/hero.png"
          alt="/images/hero.png"
          width={501}
          height={710}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
