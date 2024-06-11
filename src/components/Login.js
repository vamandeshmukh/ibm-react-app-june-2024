import { useState } from "react";

const Login = () => {

    // let loginData = {};

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleInput = (evt) => {
        console.log('before change', loginData);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value,
        });
        console.log('after change', loginData);
    };

    const handleSubmit = (evt) => {
        console.log(loginData);
        evt.preventDefault();
        console.log(loginData);
        if (loginData.username === 'vaman' && loginData.password === 'vaman') {
            setMessage(`Hi ${loginData.username}! You've logged in successfully!`);
        } else {
            setMessage('Invalid credentials!');
        }
        setLoginData({
            username: '',
            password: '',
        });
    };

    return (
        <>
            <h1>Login Component</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={loginData.username} onChange={handleInput} />
                <br />
                <input type="password" name="password" value={loginData.password} onChange={handleInput} />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>{message}</p>
        </>
    );


};

export default Login;

// const Login = () => {

//     return (
//         <div>
//             <h1>Login Component</h1>
//             <p>Login Component</p>
//         </div>
//     );

// };

// export default Login;

// import { Component } from "react";

// class Login extends Component {

//     render() {
//         return <p>Login Component</p>
//     }
// };

// export default Login;

// const Login = () => {

//     return <p>Login Component</p>
// };

// export default Login;