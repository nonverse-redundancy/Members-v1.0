import axios from "axios";

class recovery {
  constructor() {
    // Recovery server location (Should be same as Auth)
    this.recoveryurl = "http://api.nonverse.test/";

    // Default recovery variables
    this.connected = false;
    this.email = false;
    this.phone = false;

    // Config
    axios.defaults.withCredentials = true;
  }

  async #csrf() {
    await axios.get(`${this.recoveryurl}sanctum/csrf-cookie`);
  }

  // Reset recovery variables
  #reset() {
    this.email = false;
    this.phone = false;
  }

  // Get user recovery data
  async get(uuid) {
    this.#reset();
    await this.#csrf();
    await axios
      .get(`${this.recoveryurl}protected/user/${uuid}/recovery`)
      .then((response) => {
        this.email = response.data.email;
        this.phone = response.data.phone;
      })
      .catch((e) => {
        //
      });
  }
}

export default new recovery();
