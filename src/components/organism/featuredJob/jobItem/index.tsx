import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { JobTypes } from "../../../../types/index";

interface Props extends JobTypes {}

const JobsItem = ({
  image,
  jobType,
  name,
  type,
  location,
  description,
  categories,
}: Props) => {
  return (
    <div className="border border-border p-6 cursor-pointer">
      <div className="flex flex-row justify-between items-start">
        <Image src={image} alt={image} width={48} height={48} />
        <span className="border  px-4 py-1 text-xs font-semibold text-primary  border-primary ">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-muted-foreground mb-3">
          {type} . {location}
        </div>
        <div className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {description}
        </div>
      </div>
      <div className="space-x-2">
        {categories.map((item: string, i: number) => (
          <Badge
            key={i}
            variant="outline"
            className="rounded border-primary bg-primary/5 text-primary"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default JobsItem;
