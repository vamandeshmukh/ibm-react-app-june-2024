import axios from "axios";

const blogUrl = '';
const getAllBlogs = () => {
    console.log('getAllBlogs');
    return axios.get(blogUrl);
};

const getBlogById = (id) => { };

export { getAllBlogs, getBlogById };