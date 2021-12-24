import axios, { Axios } from "axios";

export default class Api {
  axios: Axios;

  constructor(abortSignal: AbortSignal) {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      signal: abortSignal,
    });
  }

  async getDonateCategories(): Promise<Array<DonateCategory>> {
    const rs = await this.axios.get("donate_categories");
    return rs.data;
  }

  async getDonateLots(donateCategoryId: number): Promise<Array<DonateLot>> {
    const rs = await this.axios.get(
      `donate_categories/${donateCategoryId}/donate_lots`
    );
    return rs.data;
  }
}

export interface DonateCategory {
  id: number;
  name: string;
}

export interface DonateLot {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
