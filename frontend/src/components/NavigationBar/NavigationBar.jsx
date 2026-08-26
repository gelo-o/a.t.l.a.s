import './NavigationBar.css';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function NavigationBar({ children, role }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    function logoutProcess() {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        navigate('/');
    }
    return(
        <div className="navbar-container">
            <nav className='navbar'>
                <h3 onClick = {() => navigate("/dashboard_end")} className='page-logo'>A.T.L.A.S</h3>
                <h3 className='greeting'>{children}</h3>

                <div className="profile-dropdown">
                    <button className="profile" onClick = {() => setIsOpen(!isOpen)}>
                        <span className='profile-picture'>CS</span>
                        <h3 className='user-type'>{role}</h3>
                        <ChevronDown className={`dropdown ${isOpen ? "rotated" : ""}`}/>
                    </button>

                    <button className={`dropdown-option ${isOpen ? "show" : ""}`} onClick = {logoutProcess}>Logout</button>

                </div>
            </nav>
        </div>
    );
}

export default NavigationBar