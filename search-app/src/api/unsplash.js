import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID IthKXC2qTCvaGLHbB0FIgFSi7AoYmWu9MXRVO9oUtgc",
      },
})