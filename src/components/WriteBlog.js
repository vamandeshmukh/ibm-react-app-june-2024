import { useState } from "react";
import { writeBlogPost } from "../services/BlogService";

// complete this component and the relevant service 
const WriteBlog = () => {

    const [writeBlogData, setWriteBlogData] = useState('');
    const [message, setMessage] = useState('');

    const handleInput = () => {
        // handle input 
    };

    const handleSubmit = () => {
        // handle submit 
    };

    return (
        <>
            <h1>Write a Blog</h1>
            <p>Express yourself</p>
            <form onSubmit={handleSubmit}>
                {/* complete this form  */}
                <input type="text" onChange={handleInput}></input>
                <input type="text" onChange={handleInput}></input>
                <input type="submit"></input>
            </form>
            {/* display success / failure message  */}
            <p> {message && message} </p>
        </>
    );

};

export default WriteBlog;