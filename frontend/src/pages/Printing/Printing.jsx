import './Printing.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
function Printing() {
    const role = localStorage.getItem('role');
    
    return (
        <div className="printing-container">
            <NavigationBar role={role}>Printing Service</NavigationBar>
        </div>
    );
}

export default Printing;