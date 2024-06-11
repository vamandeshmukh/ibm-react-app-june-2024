import { useState } from "react";

const Child = (props) => {

    const childData = 'Monu'; 
    const parentDataInChild = props.parentToChild;

    const sendDataToParent = () => {
        console.log(childData);
        props.childToParent(childData);
    };

    return (
        <>
            <h1>Child Component</h1>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {parentDataInChild}</p>
            <button onClick={sendDataToParent}>Send data to parent</button>
            {/* {sendDataToParent()} */}
        </>
    );
}

export default Child;