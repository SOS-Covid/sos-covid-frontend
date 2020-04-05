import { api } from "@app/config";

const BASE_ROUTE = "/campaign";

export class CampaignsService {
  static async findById({ campaignId }) {
    const res = await api.get(`${BASE_ROUTE}/${campaignId}`);
    return res.data;
  }

  static async findPerPage({ skip = 0, limit = 20 }) {
    const res = await api.get(`${BASE_ROUTE}/find`, {
      params: {
        skip,
        limit,
      },
    });

    return res.data.data || [];
  }
}
