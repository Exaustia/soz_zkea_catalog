"use client";

import Image from "next/image";

import { useMenu } from "../context/MenuProvider";
import classNames from "classnames";

/* eslint-disable @next/next/no-img-element */

const BasicCard = ({
  item: { color, title, description },
}: {
  item: {
    color: string;
    title: string;
    description: string;
  };
}) => {
  return (
    <div
      className={classNames("relative rounded-sm cursor-pointer overflow-hidden", {
        [color]: true,
      })}
    >
      <div className="relative">
        <img
          src={
            "https://www.ikea.com/images/salon-avec-canape-convertible-vert-avec-coussins-aux-motifs--84043f93788f2283543fcc25bcaa7bb1.png?f=m"
          }
          alt="placeholder"
          className={"img_cat rounded-t-sm transition-all duration-500 w-full"}
        />
      </div>

      <div className="p-4 flex gap-2 justify-between items-center">
        <div className="flex flex-col h-28">
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-xs mt-4">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
