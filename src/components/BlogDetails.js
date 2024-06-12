import { useEffect, useState } from "react";
import { getBlogById } from "../services/BlogService";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
    const blogParam = useParams(); const [blogData, setBlogData] = useState({});
    useEffect(() => {
        console.log('useEffect'); getBlogDetails();
    }, [])
    const getBlogDetails = () => {
        getBlogById(blogParam.id)
            .then((response) => { console.log(response.data); setBlogData(response.data); })
            .catch((error) => { console.error(error); });
    };
    return (
        <div className="container">
            <> <h1>{blogData.title}</h1> <hr /> <p> {blogData.body} </p>
                <p>{blogData.title && Array.from(blogData.title).map((blog, i) => {
                    return <span obj={blog} key={i}> {blogData.body} </span>;
                })}</p>
            </>
        </div>
    );

};
export default BlogDetails;