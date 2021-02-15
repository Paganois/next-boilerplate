/* eslint-disable no-console */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req);
    res.status(200).json({ name: "John Doe" });
};

export default handler;
