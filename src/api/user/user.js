import axios from "axios";

class user {
  constructor() {
    // API server location
    this.apiurl = "http://api.nonverse.test/";

    // Default user variable
    this.connected = false; // Was connection to API successful?
    this.firstname = false; // Real (human) name of requested user
    this.lastname = false; // Real (human) name of requested user
    this.fullname = false; // Real (human) name of requested user
    this.alias = false; // Username of requested user
    this.email = false; // Email of requested user
    this.details = false; // Additional details of requested user

    // Config
    axios.defaults.withCredentials = true;
  }

  async #csrf() {
    await axios.get(`${this.apiurl}sanctum/csrf-cookie`);
  }

  // Reset user variables
  #reset() {
    this.firstname = false;
    this.lastname = false;
    this.fullname = false;
    this.alias = false;
    this.email = false;
    this.details = false;
  }

  // Get user data from API
  async get(uuid) {
    this.#reset();
    await this.#csrf();
    await axios
      .get(`${this.apiurl}protected/user/view/${uuid}`, {})
      .then((response) => {
        console.log(response);
        this.firstname = response.data.name_first;
        this.lastname = response.data.name_last;
        this.fullname = `${this.firstname} ${this.lastname}`;
        this.alias = response.data.username;
        this.email = response.data.email;
        this.details = {
          language: response.data.language,
          created: "Unavailable",
          updates: "Unavailable",
        };
      })
      .catch((e) => {
        //
      });
  }

  async update(uuid, data) {
    await this.#csrf();
    await axios
      .post(`${this.apiurl}protected/user/update/${uuid}`, {
        name: data.name,
        username: data.alias,
        email: data.email,
        birthday: data.birthday,
        phone: data.phone,
      })
      .then((response) => {
        console.log(response);
        this.error = false;
        this.status = 200;
      })
      .catch((e) => {
        console.log(e);
        this.error = 'Something Went Wrong';
        this.status = 500;
      });
  }
}

export default new user();
