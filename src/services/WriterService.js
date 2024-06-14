import axios from "axios";

const writerUrl = 'https://jsonplaceholder.typicode.com/users';

export const getWriterById = (id) => {
    return axios.get(`${writerUrl}/${id}`);
};
