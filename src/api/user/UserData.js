import axios from "axios";

class user {
  constructor() {
    // API server location
    this.apiurl = "http://api.nonverse.test/";

    // Default user variable
    this.connected = false; // Was connection to API successful?
    this.firstname = false; // Real (human) name of requested user
    this.lastname = false; // Real (human) name of requested user
    this.alias = false; // Username of requested user
    this.email = false; // Email of requested user
    this.details = false; // Additional details of requested user

    // Config
    axios.defaults.withCredentials = true;
    this.csrf = `${this.apiurl}sanctum/csrf-cookie`; // Location of CSRF token
  }

  // Reset user variables
  reset() {
    this.firstname = false;
    this.lastname = false;
    this.alias = false;
    this.email = false;
    this.details = false;
  }

  // Get user data from API
  async get(uuid) {
    await axios.get(this.csrf);
    await axios
      .get(`${this.apiurl}api/test/user/${uuid}`, {})
      .then((response) => {
        console.log(response);
        this.firstname = response.data.name_first;
        this.lastname = response.data.name_last;
        this.alias = response.data.username;
        this.email = response.data.email;
        this.details = {
          language: response.data.language,
          created: 'Unavailable',
          updates: 'Unavailable',
        }
      })
      .catch((e) => {
        //
      });
  }
}

export default new user();
