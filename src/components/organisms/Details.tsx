import React, { useState, useEffect } from "react";
import Head from "next/head";
import DetailsInfo from "../molecules/DetailsInfo";

import ImagePostProcess from "../shaders/ImagePostProcess";
import { IResponse } from "../../shared/types/Response";

const Details: React.FC<{
  name: string | string[];
  isRouteChange: boolean;
  data: IResponse["data"];
}> = ({ name, isRouteChange, data }) => {
  return (
    <div className="container">
      {data.map((res) => (
        <React.Fragment key={res.img}>
          {res.img.split(".")[0] === name && (
            <>
              <Head>
                <title>did0es.me - {res.info.title}</title>
              </Head>

              {!isRouteChange && <ImagePostProcess img={`/works/${res.img}`} />}
              <DetailsInfo
                title={res.info.title}
                date={res.info.date}
                tags={res.info.tags}
                desc={res.info.desc}
                link={res.info.link}
                isRouteChange={isRouteChange}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Details;
