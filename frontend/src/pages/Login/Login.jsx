import './Login.css';
import { useState } from 'react';
import Buttons from '../../components/StartButton/StartButton';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useNavigate } from "react-router-dom";

function Login() {
    const [showLogin, setShowLogin] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function loginProcess(event) {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        await response.json();
    };

    return (
        <div className="login-page">
            
            <div className="login-intro">
                <h1 className={`login-logo ${showLogin ? "move-up" : ""}`}>A.T.L.A.S</h1>
                <h2 className={`logo-meaning ${showLogin ? "remove" : ""}`}>Automated Technology Local Access System</h2>
                <Buttons 
                    onClick = {() => setShowLogin(true)}
                    className={showLogin ? "remove" : ""}
                >START</Buttons>
            </div>

            <div className={`login-form-container ${showLogin ? "show" : ""}`}>
                <form className= 'login-form' onSubmit={loginProcess}>
                    <h2 className='login-title-form'>LOGIN</h2>
                    <label className="login-label">Username</label>
                    <input 
                        type="text" 
                        className="login-input" 
                        id='username' 
                        required
                        onChange={(event) => setUsername(event.target.value)}/>
                
                    <label className='login-label'>Password</label>
                    <input 
                        type="password" 
                        className='login-input' 
                        id='password' 
                        required
                        onChange={(event) => setPassword(event.target.value)}/>

                    <div className="action-row">
                        <Checkbox>Remember Me</Checkbox>
                        <a href="#" className='forget-pass'><p>Forget Password</p></a>
                    </div>

                    <button
                        type="submit"
                        className="login-btn"
                    >
                        LOGIN
                    </button>
                </form>
            </div>

        </div>
        
    );
}

export default Login;