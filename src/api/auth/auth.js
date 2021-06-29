import axios from 'axios'

// Authenticate SPA Using Nonverse SecureAuth
class auth {
  constructor() {
    // SecureAuth server location
    this.authurl = "http://auth.nonverse.test/"

    // URL to direct to after login
    this.continue = "my.nonverse.test"

    // Default auth variables
    this.authenticated = false; // Is a user authenticated in session
    this.uuid = false; // UUID of current authenticated user

    // Config
    axios.defaults.withCredentials = true;
    //axios.get(this.authurl + 'sanctum/csrf-cookie');
  }

  // Reset auth variables
  reset() {
    this.authenticated = false;
    this.uuid = false;
  }

  // Direct login requests to auth server's login page
  login() {
    this.reset();
    window.location.replace(this.authurl + 'login?continue=' + this.continue);
  }

  // Check if a user is authenticated in active session
  async check() {
    await axios
      .get(this.authurl + 'api/user/logged', {})
      .then((response) => {
        this.authenticated = true;
        this.uuid = response.data.uuid;
        console.log(this.uuid);
      })
      .catch((e) => {
        console.log(e);
        this.reset();
      });
  }

  // Remove user's authentication from session
  async logout() {
    await axios.post(this.authurl + 'api/user/logout', {})
    .then(response => {
      this.reset();
      window.location.reload();
    })
    .catch(responce => {
      window.location.reload();
    });
  }
}

export default new auth();
