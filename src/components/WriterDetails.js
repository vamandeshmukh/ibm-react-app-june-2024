import { getWriterById } from "../services/WriterService";

// nest this component in BlogDetails component 
const WriterDetails = ({userId}) => {
    return (
        <>
            <p>Writer - name, email, city</p>
        </>
    );
};

export default WriterDetails;