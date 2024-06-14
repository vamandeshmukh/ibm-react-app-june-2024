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
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        <p className="display-4 text-primary mb-3">IBM Blogs</p>
                        <hr />
                        <p className="lead" >Click a blog title to read the blog post.</p>
                        <> {allBlogslist &&
                            allBlogslist.map((blog, i) => {
                                return <div obj={blog} key={i}>
                                    <Link to={`/blog-details/${blog.id}`} className="text-decoration-none">
                                        {blog.title}</Link> </div>;
                            })
                        }</>
                        <hr />
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </div>
        </>

    );
};
export default BlogList;
