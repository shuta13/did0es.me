import React from "react";

import Details from "../../components/organisms/Details";
import { useRouter } from "next/router";
import { IResponse } from "../../shared/types/Response";
import { END_POINT_URL } from "../../config";
const result = require("../api/data/response.json");

const DetailsHome: React.FC<{
  isRouteChange: boolean;
  data: IResponse["data"];
}> = (props) => {
  const router = useRouter();
  const { isRouteChange, data } = props;
  const { name } = router.query;

  return (
    <>
      {name && (
        <Details name={name} isRouteChange={isRouteChange} data={data} />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  // const res = await fetch(`${END_POINT_URL}/api/v1`);
  // const data: IResponse["data"] = await res.json();
  const data = result as IResponse["data"];
  const paths = data.map((d) => ({
    params: { name: `${d.pathname}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  // const res = await fetch(`${END_POINT_URL}/api/v1`);
  // const data: IResponse["data"] = await res.json();
  const data = result;
  return { props: { data } };
};

export default DetailsHome;
