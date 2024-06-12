import { useState } from "react";
import { writeBlogPost } from "../services/BlogService";

// complete this component and the relevant service 
const WriteBlog = () => {

    const [writeBlogData, setWriteBlogData] = useState({ title: '', body: '' });
    const [message, setMessage] = useState('');

    const handleInput = (evt) => {
        setWriteBlogData({
            ...writeBlogData,
            [evt.target.name]: evt.target.value,
        });
        console.log(writeBlogData);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        writeBlogPost(writeBlogData)
            .then((response) => {
                console.log(response.data);
                setMessage(`Blog with the id ${response.data.id} and title ${response.data.title} has been posted successfully!`);
            })
            .catch((error) => {
                console.error(error);
                setMessage(error.message);
            });
        setWriteBlogData({
            title: '',
            body: '',
        });
        setMessage('');
    };

    return (
        <>
            <h1>Write a Blog</h1>
            <p>Express yourself</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={writeBlogData.title} onChange={handleInput} />
                <br />
                <label htmlFor="body">Body</label>
                <input type="text" name="body" value={writeBlogData.body} onChange={handleInput} />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p> {message && message} </p>
        </>
    );
};

export default WriteBlog;