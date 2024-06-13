import { useEffect, useState } from "react";
import { getBlogById } from "../services/BlogService";
import { useParams } from "react-router-dom";
import WriterDetails from "../WriterDetails";
import CommentDetails from "../CommentDetails";

const BlogDetails = () => {
    const blogParam = useParams();
    const [blogData, setBlogData] = useState({});

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
            <> <h1>{blogData.title}</h1>
                <hr />
                <WriterDetails />
                <hr />
                <p> {blogData.body} </p>
                <hr />
                <CommentDetails />
                <hr />
            </>
        </div>
    );
};
export default BlogDetails;

// import { useEffect, useState } from "react";
// import { getBlogById } from "../services/BlogService";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//     const blogParam = useParams();
//     const [blogData, setBlogData] = useState({});

//     useEffect(() => {
//         console.log('useEffect'); getBlogDetails();
//     }, [])

//     const getBlogDetails = () => {
//         getBlogById(blogParam.id)
//             .then((response) => { console.log(response.data); setBlogData(response.data); })
//             .catch((error) => { console.error(error); });
//     };
//     return (
//         <div className="container">
//             <> <h1>{blogData.title}</h1>
//                 <hr />
//                 <p> {blogData.body} </p>
//                 <hr />
//                 <p>Following element is only to increase the body of the blog.</p>
//                 <p>{blogData.title && Array.from(blogData.title).map((blog, i) => {
//                     return <span obj={blog} key={i}> {blogData.body} </span>;
//                 })}</p>
//             </>
//         </div>
//     );
// };
// export default BlogDetails;