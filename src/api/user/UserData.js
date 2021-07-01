import axios from "axios";

class user {
    constructor() {
        // API server location
        this.apiurl = 'http://api.nonverse.test/';

        // Default user variable
        this.connected = false; // Was connection to API successful?
        this.name = false; // Real (human) name of requested user
        this.alias = false; // Username of requested user
        this.email = false; // Email of requested user
        this.details = false; // Additional details of requested user


        // Config
        axios.defaults.withCredentials = true;
    }

    // Reset user variables
    reset() {
        this.name = false;
        this.alias = false;
        this.email = false;
        this.details = false;
    }

    // Get user data from API
    async get(uuid) {
        await axios
        .get(`${this.apiurl}protected/user/${uuid}`)
        .then((response) => {
            //
        })
        .catch((e) => {
            //
        })
    }
}

export default new user