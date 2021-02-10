import response from "../response.json";
import { NextApiRequest, NextApiResponse } from "next";
// import type { NextApiRequest, NextApiResponse } from "next" // typescript => 3.8^

export default (req: NextApiRequest, res: NextApiResponse<typeof response>) => {
  res.status(200).json(response);
};
