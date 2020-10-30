import React, { useState } from "react";
import "./Carousel.scss";
import { Slide } from "./Slide";
import individual from "../../public/json/individual.json";
import joint from "../../public/json/joint.json";

const works = individual.concat(joint);

export const Carousel: React.FC = () => {
  const [currentSlideName] = useState("Candy");

  return (
    <div className="CarouselWrap">
      <>
        {works.map((work, index) =>
          work.info.title === currentSlideName ? (
            <Slide work={work} key={index} />
          ) : null
        )}
      </>
    </div>
  );
};
