// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const hre = require("hardhat");

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // get keys from hre
  const result = hre.config.paths.configFile

  res.status(200).json({ name: result })

}