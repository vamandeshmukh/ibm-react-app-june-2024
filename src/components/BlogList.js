import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/BlogService";
import { Link } from "react-router-dom";

const BlogList = () => {

    const [allBlogslist, setAllBlogsList] = useState();

    useEffect(() => {
        console.log('useEffect');
        getBlogsData();
    }, []);

    const getBlogsData = () => {
        console.log('getBlogsData');
        getAllBlogs()
            .then((response) => {
                console.log(response.data);
                setAllBlogsList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <>
                <h1>Blog List Component</h1>
                <hr />
                <p >Click a blog title to read the blog post.</p>
                <> {allBlogslist &&
                    allBlogslist.map((blog, i) => {
                        return <div obj={blog} key={i}> 
                        <Link to={`/blog-details/${blog.id}`}>
                            {blog.title}</Link> </div>;
                    })
                }</>
            </>
        </div>
    );
};
export default BlogList;