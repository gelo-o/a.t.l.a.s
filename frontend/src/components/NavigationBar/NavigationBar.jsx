import './NavigationBar.css';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function NavigationBar({ children, role }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const firstName = localStorage.getItem('firstname');
    const lastName = localStorage.getItem('lastname');

    function logoutProcess() {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        navigate('/');
    }
    return(
        <div className="navbar-container">
            <nav className='navbar'>
                <h3 onClick = {() => navigate("/dashboard_end")} className='page-logo'>A.T.L.A.S</h3>
                <h3 className='greeting'>{children}</h3>

                <div className="profile-dropdown">
                    <button className="profile" onClick = {() => setIsOpen(!isOpen)}>
                        <span className='profile-picture'>{firstName[0].toUpperCase() + lastName[0].toUpperCase()}</span>
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