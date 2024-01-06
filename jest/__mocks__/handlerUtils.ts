import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { RequestOptions, createRequest, createResponse } from 'node-mocks-http'

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>

export const testHandler = async (
  handler: NextApiHandler,
  options: RequestOptions
) => {
  const req = createRequest<ApiRequest>(options)
  const res = createResponse<APiResponse>()

  await handler(req, res)
  return res
}
