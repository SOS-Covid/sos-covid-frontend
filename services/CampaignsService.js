import { api } from "../config/services";

const BASE_ROUTE = "/campaign";

export class CampaignsService {
  static list({ skip = 0, limit = 20 }) {
    return api.get(`${BASE_ROUTE}/find`, {
      params: {
        skip,
        limit,
      },
    });
  }
}
