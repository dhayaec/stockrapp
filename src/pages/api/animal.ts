// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  message: string
}

export default function handleAnimal(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { animal },
  } = req

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ message: `Your favorite animal is ${animal}` }))
}
