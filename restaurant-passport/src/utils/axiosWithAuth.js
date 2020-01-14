import axios from "axios";

export  const AxiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://bw-restaurant-passport.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    });
};