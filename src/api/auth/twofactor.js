import axios from "axios";
import auth from "./auth";

// Handle Google 2FA Via SecureAuth Servers
class twofactor {
  constructor() {
    // Config
    axios.defaults.withCredentials = true;
  }

  async setup() {
    await auth._csrf;
    await axios
      .get(`${auth.authurl}user/${auth.uuid}/two-factor-url`, {})
      .then((response) => {
        this.setup.url = response.data.url;
        this.setup.code = response.data.code;
      })
      .catch((e) => {
        //
      });
  }
}

export default new twofactor();
