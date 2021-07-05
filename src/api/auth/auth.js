import axios from "axios";

// Authenticate SPA Using Nonverse SecureAuth
class auth {
  constructor() {
    // SecureAuth server location
    this.authurl = "http://auth.nonverse.test/";

    // URL to direct to after login
    this.continue = "my.nonverse.test";

    // Default auth variables
    this.connected = false; // Was connection to SecureAuth successful?
    this.authenticated = false; // Is a user authenticated in session?
    this.uuid = false; // UUID of current authenticated user

    // Config
    axios.defaults.withCredentials = true;
    this.csrf = `${this.authurl}sanctum/csrf-cookie`; // Location of CSRF token
  }

  // Reset auth variables
  reset() {
    this.authenticated = false;
    this.uuid = false;
  }

  // Direct login requests to auth server's login page
  login() {
    this.reset();
    window.location.replace(`${this.authurl}login?continue=${this.continue}`);
  }

  // Check if a user is authenticated in active session
  async check() {
    await axios.get(this.csrf);
    await axios
      .get(`${this.authurl}api/user/logged`, {})
      .then((response) => {
        this.connected = true;
        this.authenticated = true;
        this.uuid = response.data.uuid;
        console.log(this.uuid);
      })
      .catch((e) => {
        console.log(e);
        this.connected = false;
        if (e.response) {
          if (e.response.status === 401) {
            this.connected = true;
          }
        }
        this.reset();
      });
  }

  // Remove user's authentication from session
  async logout() {
    await axios.get(this.csrf);
    await axios
      .post(`${this.authurl}api/user/logout`, {})
      .then((response) => {
        this.reset();
        window.location.reload();
      })
      .catch((response) => {
        //window.location.reload();
      });
  }
}

export default new auth();
