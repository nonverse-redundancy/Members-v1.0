import axios from "axios";
import auth from "./auth";

// Handle Google 2FA Via SecureAuth Servers
class twofactor {
  constructor() {
    // Config
    axios.defaults.withCredentials = true;
  }

  async enable() {
    await auth._csrf;
    await axios
      .get(`${auth.authurl}user/${auth.uuid}/two-factor-url`, {})
      .then((response) => {
        this.enable.url = response.data.url;
        this.enable.code = response.data.code;
      })
      .catch((e) => {
        //
      });
  }
}

export default new twofactor();
