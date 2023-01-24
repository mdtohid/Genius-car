import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin=()=>{
        navigate('/login');
    };

    const handleRegister=(event)=>{
        event.preventDefault();
        console.log(event.target)
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        console.log(email, name, password);
    }

    return (
        <div className='register-form'>
            <h1 className='text-center'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;