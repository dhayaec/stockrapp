import handleAnimal from '@/pages/api/animal'
import { testHandler } from './jest/__mocks__/handlerUtils'

describe('/api/[animal]', () => {
  test('should returns an object with a name', async () => {
    const res = await testHandler(handleAnimal, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      query: {
        animal: 'dog',
      },
    })

    expect(res._getJSONData()).toEqual({
      message: 'Your favorite animal is dog',
    })
  })
})
