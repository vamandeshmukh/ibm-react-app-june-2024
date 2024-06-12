import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/BlogService";
import { Link } from "react-router-dom";

const BlogList = () => {

    const [allBlogslist, setAllBlogsList] = useState();


    
    return (
        <>
            <h1>Blog List Component</h1>
            <p>List of the blog posts </p>
            <hr />
            <p >Click a blog title to read the blog post.</p>
    
    
        </>
    );
};
export default BlogList;