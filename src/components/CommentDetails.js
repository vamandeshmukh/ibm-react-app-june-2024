import { useEffect, useState } from "react";
import { getCommentsByPostId } from "../services/CommentService";
import { Link } from "react-router-dom";

// nest this component in BlogDetails component 
const CommentDetails = ({ postId }) => {

    const [commentsList, setCommentsList] = useState();

    useEffect(() => {
        getComments(postId);
    });

    const getComments = (postId) => {
        getCommentsByPostId(postId)
            .then((response) => {
                console.log(response.data);
                setCommentsList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {commentsList &&
                < p className="lead text-primary">{commentsList.length} Comments: </p >
            }
            <> {commentsList &&
                commentsList.map((comment, i) => {
                    return <div obj={comment} key={i}>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                        <Link to={`mailto:${comment.email}`} >{comment.email}</Link>
                        <p></p>
                        <hr />
                    </div>
                })
            }</>
        </>
    );
};

export default CommentDetails;