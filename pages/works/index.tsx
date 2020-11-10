import React from "react";
import { Carousel } from "../../components/organisms/Carousel";

const Work: React.FC<{ isRouteChange: boolean }> = props => {
  const { isRouteChange } = props;
  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <Carousel />
    </div>
  );
};

export default Work;
