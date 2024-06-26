
import axios from "axios";

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const login = (user) => {
    console.log(user);
    return axios.get(apiUrl);
};

const register = (user) => {
    console.log(user);
    return axios.post(apiUrl, user);
};
 
const getProfile = (id) => {
    console.log(id);
    return axios.get(`${apiUrl}/${id}`);
};

const updateProfile = (user) => {
    console.log(user);
    return axios.put(apiUrl, user);
};

export { login, register, updateProfile, getProfile };



// import axios from "axios";

// const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// const userService = {

//     login: (user) => {
//         console.log(user);
//         return axios.get(apiUrl);
//     },

//     register: (user) => {
//         console.log(user);
//         return axios.post(apiUrl, user);
//     },

//     getProfile: (id) => {
//         console.log(id);
//         return axios.get(`${apiUrl}/${id}`);
//     },

//     updateProfile: (user) => {
//         console.log(user);
//         return axios.put(apiUrl, user);
//     }

// };


// export default userService;



