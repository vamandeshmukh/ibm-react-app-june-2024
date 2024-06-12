
import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const blogParam = useParams();


    return (
        <>
            <h1>Blog Details Component</h1>
            <p>Details of a blog post </p>
            <p>BLog id: {blogParam.id} </p>
        </>
    );

};
export default BlogDetails;