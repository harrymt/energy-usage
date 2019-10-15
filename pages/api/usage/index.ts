import { getAllUsage, setup } from './usage-repository'
import { NextApiRequest, NextApiResponse } from 'next'

let firstTime = false

export default async function handle(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  if (!firstTime) {
    setup()
    firstTime = true
  }

  try {
    const data = getAllUsage()
    res.setHeader('content-type', 'application/json')
    res.status(200).json(data)
  } catch (e) {
    res.status(200).json({ status: 500, reason: JSON.stringify(e.message) })
  }
}
