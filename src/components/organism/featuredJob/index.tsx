import TitleSection from "@/components/atoms/title";
import React from "react";
import JobsItem from "./jobItem";

type Props = {};

const FeaturedJobs = (props: Props) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection wordOne="Featured" wordTwo="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobsItem
            key={item}
            image="/images/company.png"
            jobType="Remote"
            name="Email Marketing"
            type="Agency"
            location="Paris, France"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam, quidem laudantium blanditiis amet impedit suscipit quibusdam magni exercitationem nihil?."
            categories={["Market", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
