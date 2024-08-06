"use client";

import Image from "next/image";
import classNames from "classnames";


const BasicCard = ({
  item: { color, title, description, image },
}: {
  item: {
    color: string;
    title: string;
    description: string;
    image: string;
  };
}) => {
  return (
    <div
      className={classNames(
        "relative rounded-sm cursor-pointer overflow-hidden h-[480px]",
        {
          [color]: true,
        }
      )}
    >
      <div className="relative h-3/5">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={"/images/" + image}
          alt="placeholder"
          className={"img_cat rounded-t-sm transition-all duration-500 w-full"}
        />
      </div>

      <div className="p-4 flex gap-2 justify-between items-center h-2/5 ">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-xs mt-4">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
