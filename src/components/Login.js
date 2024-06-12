import { useState } from "react";

import { login } from "../services/UserService";

// import userService from "../services/UserService";
// userService.login({});

const Login = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleInput = (evt) => {
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value,
        });
        console.log('after change', loginData);
    };

    const handleSubmit = (evt) => {
        console.log(loginData);
        evt.preventDefault();

        login(loginData)
            .then((response) => {
                let validUsername = '';
                console.log(response.data);
                response.data.forEach((resp) => {
                    console.log(resp.username);
                    if (resp.username === loginData.username && resp.username === loginData.password) {
                        validUsername = resp.username;
                    }
                })
                if (validUsername) {
                    console.log(loginData.username);
                    setMessage(`Hi ${validUsername}! You've logged in successfully!`);
                }
                else {
                    setMessage('Invalid credentials!');
                };
            })
            .catch((error) => {
                console.error(error);
                setMessage(error.message);
            });

        setLoginData({
            username: '',
            password: '',
        });
        setMessage('');
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