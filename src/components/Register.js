import { useState } from "react";

const Register = () => {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    const [registerData, setRegisterData] = useState({
        username: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleInput = (evt) => {
        console.log('before change', registerData);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value,
        });
        console.log('after change', registerData);
    };

    const handleSubmit = (evt) => {
        console.log(registerData);
        evt.preventDefault();
        console.log(registerData);

        // make API call == Make HTTP request 

        if (registerData.username === 'vaman' && registerData.password === 'vaman') {
            setMessage(`Hi ${registerData.username}! You've registered in successfully!`);
        } else {
            setMessage('Invalid credentials!');
        }
        setRegisterData({
            username: '',
            password: '',
        });
    };

    return (
        <>
            <>
                <h1>Register Component 1</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={registerData.username} onChange={handleInput} />
                    <br />
                    <input type="password" name="password" value={registerData.password} onChange={handleInput} />
                    <br />
                    <input type="submit" value="Register" />
                </form>
                <p>{message}</p>
            </>
        </>
    );
};

export default Register;




// import { useState } from "react";

// const Register = () => {

//     const [registerData, setRegisterData] = useState({
//         username: '',
//         password: '',
//     });

//     const [message, setMessage] = useState('');

//     const handleInput = (evt) => {
//         console.log('before change', registerData);
//         setRegisterData({
//             ...registerData,
//             [evt.target.name]: evt.target.value,
//         });
//         console.log('after change', registerData);
//     };

//     const handleSubmit = (evt) => {
//         console.log(registerData);
//         evt.preventDefault();
//         console.log(registerData);
//         if (registerData.username === 'vaman' && registerData.password === 'vaman') {
//             setMessage(`Hi ${registerData.username}! You've registered in successfully!`);
//         } else {
//             setMessage('Invalid credentials!');
//         }
//         setRegisterData({
//             username: '',
//             password: '',
//         });
//     };

//     return (
//         <>
//             <>
//                 <h1>Register Component 1</h1>
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" name="username" value={registerData.username} onChange={handleInput} />
//                     <br />
//                     <input type="password" name="password" value={registerData.password} onChange={handleInput} />
//                     <br />
//                     <input type="submit" value="Register 1" />
//                 </form>
//                 <p>{message}</p>
//             </>
//             <>
//                 <h1>Register Component 2</h1>
//                 <form>
//                     <input type="text" name="username" value={registerData.username} onChange={handleInput} />
//                     <br />
//                     <input type="password" name="password" value={registerData.password} onChange={handleInput} />
//                     <br />
//                     <input type="button" value="Register 2" onClick={handleSubmit} />
//                 </form>
//                 <p>{message}</p>
//             </>
//             <>
//                 <h1>Register Component 3</h1>
//                 <form>
//                     <input type="text" name="username" value={registerData.username} onChange={handleInput} />
//                     <br />
//                     <input type="password" name="password" value={registerData.password} onChange={handleInput} />
//                     <br />
//                     <button onClick={handleSubmit}>Register 3</ button>
//                 </form>
//                 <p>{message}</p>
//             </>
//         </>
//     );
// };

// export default Register;


