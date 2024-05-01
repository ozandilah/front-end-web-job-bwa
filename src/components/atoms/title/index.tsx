import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {
  wordOne: string;
  wordTwo: string;
};

const TitleSection = ({ wordOne, wordTwo }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="text-4xl font-bold">
        {wordOne} <span className="text-primary">{wordTwo}</span>
      </div>
      <div className="inline-flex gap-3 items-center text-primary font-semibold cursor-pointer">
        <span>Show All Jobs</span>
        <HiOutlineArrowNarrowRight />
      </div>
    </div>
  );
};

export default TitleSection;
