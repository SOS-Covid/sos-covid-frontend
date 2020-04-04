import { api } from "../config/services";


export class ONGService {
  static index(page) {
    const limit = 20;

    return api.get("/organization", {
      params: {
        skip: limit * page,
        limit
      }
    })
  }
}