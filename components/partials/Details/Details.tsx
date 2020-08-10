import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "./DetailsInfo";

import individual from "../../../public/json/individual.json";
import joint from "../../../public/json/joint.json";
import "./Details.scss";
import Loading from "../../common/Loading";
import { BackButton } from "../../common/BackButton";
import ImagePostProcess from "../../common/ImagePostProcess";

const Details: React.FC<{ name: string | string[] }> = ({ name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const works = individual.concat(joint);

  return (
    <>
      {works.map(work => (
        <div key={work.img}>
          {work.img.split(".")[0] === name ? (
            <>
              <Head>
                <title>did0es.me - {work.info.title}</title>
                {/* <meta name="description" content={`${work.info.title}`} />
                <meta
                  property="og:site_name"
                  content={`did0es.me - ${work.info.title}`}
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content={`https://did0es.me/details/${
                    work.img.split(".")[0]
                  }`}
                />
                <meta
                  property="og:title"
                  content={`did0es.me - ${work.info.title}`}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  property="og:description"
                  content={`${work.info.title}`}
                />
                <meta
                  property="og:image"
                  content={`https://did0es.me/works/${work.img}`}
                /> */}
              </Head>

              <div className="DetailsClip">
                <ImagePostProcess
                  img={`/works/${work.img}`}
                  isBackButtonClicked={isClicked}
                />
                <DetailsInfo info={work.info} />
              </div>
              <BackButton isClicked={isClicked} setIsClicked={setIsClicked} />
              <Loading />
            </>
          ) : null}
        </div>
      ))}
    </>
  );
};

export default Details;
