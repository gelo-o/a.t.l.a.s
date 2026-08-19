import './Dashboard_End.css';
import { Printer } from 'lucide-react';
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons'
import NavigationBar from '../../components/NavigationBar/NavigationBar';

function Dashboard_End() {
    return (
        <div className="dashboard-container">
            <NavigationBar />
            
            <div className="service-line">
                <hr className='divider'/>  
                <h2 className='service-line-title'>Services</h2>
                <hr className='divider'/>  
            </div>

            <div className="service-buttons">
                <DashboardButtons icon={<Printer size={100} color='#1DD3AF'/>}>
                    Printing Service
                </DashboardButtons>

                <DashboardButtons icon={<Printer size={100} color='#1DD3AF'/>}>
                    Printing Service
                </DashboardButtons>

                <DashboardButtons icon={<Printer size={100} color='#1DD3AF'/>}>
                    Printing Service
                </DashboardButtons>

    
            </div>
        </div>
    );
}

export default Dashboard_End