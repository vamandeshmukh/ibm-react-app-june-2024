import axios from "axios";


const commentUrl = 'https://jsonplaceholder.typicode.com/comments';

export const getCommentsByPostId = (id) => {

    return axios.get(`${commentUrl}?postId=${id}`);

};


// https://jsonplaceholder.typicode.com/comments?postId=22