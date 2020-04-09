import { api } from '@app/config'

export class ONGService {
  static index(page) {
    const limit = 20

    return api.get('/organization', {
      params: {
        skip: limit * page,
        limit
      }
    })
  }
}
