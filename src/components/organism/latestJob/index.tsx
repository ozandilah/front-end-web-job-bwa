import TitleSection from "@/components/atoms/title";
import React from "react";
import JobItem from "./jobItem";

type Props = {};

const LatestJobs = (props: Props) => {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection wordOne="Latest" wordTwo="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {[0, 1, 2].map((item: number) => (
          <JobItem
            key={item}
            image="/images/company2.png"
            name="Software Engineer"
            type="Programming"
            location="Paris, France"
            jobType="Remote"
            categories={["Programming", "Developer"]}
            description="description"
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
