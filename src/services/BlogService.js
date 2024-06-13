
import axios from "axios";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts/';

const fun = (a = 5, b = 5) => a + b;
fun(1, 2);

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

