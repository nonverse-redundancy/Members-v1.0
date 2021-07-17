import axios from "axios";
import auth from "./auth";

// Handle Google 2FA Via SecureAuth Servers
class twofactor {
  constructor() {

    // Default 2FA values
    this.enable.success = false;

    // Config
    axios.defaults.withCredentials = true;
  }

  async setup() {
    await auth._csrf();
    await axios
      .get(`${auth.authurl}user/${auth.uuid}/two-factor-setup`, {})
      .then((response) => {
        this.setup.url = response.data.url;
        this.setup.code = response.data.code;
      })
      .catch((e) => {
        //
      });
  }

  async enable(code) {
    await auth._csrf();
    await axios
    .post(`${auth.authurl}user/${auth.uuid}/two-factor-setup`, {
      uuid: auth.uuid,
      one_time_password: code,
    })
    .then((response) => {
      this.enable.success = true;
    })
    .catch((e) => {
      console.log(e)
    })

  }
}

export default new twofactor();
