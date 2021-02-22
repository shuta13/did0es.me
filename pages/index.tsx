import { useState } from "react";
import { Main } from "../components/organisms/Main";
import { ProfileSlide } from "../components/organisms/ProfileSlide";

export type CanvasColor = "theme" | "twilight" | "monotone";

const Home: React.FC<{
  isLoaded: boolean;
  isRouteChange: boolean;
}> = (props) => {
  const { isLoaded, isRouteChange } = props;
  const [canvasColor, setCanvasColor] = useState<CanvasColor>("theme");
  return (
    <div className="container">
      {!isRouteChange && <Main canvasColor={canvasColor} />}
      <ProfileSlide isLoaded={isLoaded} setCanvasColor={setCanvasColor} />
    </div>
  );
};

export default Home;
