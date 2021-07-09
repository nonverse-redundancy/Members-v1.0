import axios from "axios";

class validate {
  constructor() {
    // API server validator location
    this.apiurl = "http://api.nonverse.test/";
    this.validatorurl = 'http://api.nonverse.test/client/validator/';

    // Config
    axios.defaults.withCredentials = true;
  }

  async #csrf() {
    await axios.get(`${this.apiurl}sanctum/csrf-cookie`);
  }

  name(data, compare) {
    this.name.error = false;
    if (compare) {
      if (data === compare) {
        return this.name.error = false;
      }
    }
    const count = data.split(" ");
    if (count.length < 2) {
      this.name.error = 'First and last names are required';
    } else if (count.length > 2) {
      this.name.error = 'Only first and last name can be entered';
    } else {
      this.name.error = false;
    }
  }

  async email(data, compare) {
    this.email.error = false;
    if (compare) {
      if (data === compare) {
        return this.email.error = false;
      }
    }
    await this.#csrf();
    await axios
      .post(`${this.validatorurl}email`, {
        email: data,
      })
      .then((response) => {
        switch (response.data) {
          case "The email field is required.":
            this.email.error = 'An email is required';
            break;
          case "The email must be a valid email address.":
            this.email.error = "Invalid email";
            break;
          case "The email has already been taken.":
            this.email.error = "This email is taken";
            break;
        }
        console.log(this.email.error);
      })
      .catch((e) => {
        this.email.error = "Unable to validate email";
      });
  }
}

export default new validate();
