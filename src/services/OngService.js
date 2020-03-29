import axios from "axios";

export default class OngService {
  static getOngs = async () => {
    let url =
      "https://sos-covid-backend.herokuapp.com/user/find/organization?skip=0&limit=20";

    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return err.response;
    } finally {
      // this.setState({ loading: false });
    }
  };
}
