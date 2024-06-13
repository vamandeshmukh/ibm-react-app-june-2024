
import axios from "axios";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts/';

const getAllBlogs = () => {
    console.log('getAllBlogs');
    return axios.get(blogUrl);
};

const getBlogById = (id) => {
    console.log(id);
    return axios.get(`${blogUrl}/${id}`);
};

const writeBlogPost = (blog) => {
    console.log(blog);
    return axios.post(blogUrl, blog);
};

export { getAllBlogs, getBlogById, writeBlogPost };

