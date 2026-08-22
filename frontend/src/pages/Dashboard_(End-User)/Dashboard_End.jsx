import './Dashboard_End.css';
import { Printer, Clapperboard } from 'lucide-react';
import DashboardButtons from '../../components/DashboardButtons/DashboardButtons'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';

function Dashboard_End() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <NavigationBar />
            
            <div className="service-line">
                <hr className='divider'/>  
                <h2 className='service-line-title'>Services</h2>
                <hr className='divider'/>  
            </div>

            <div className="service-buttons">
                <DashboardButtons 
                    icon={<Printer size={120} color='#1DD3AF' strokeWidth={1}/>} 
                    onClick={() => navigate("/printing")}
                >
                    Printing Service
                </DashboardButtons>

                <DashboardButtons icon={<Clapperboard size={120} color='#F14BF1' strokeWidth={1}/>}>
                    Streaming Service
                </DashboardButtons>

                <DashboardButtons>
                    More to Come Ü
                </DashboardButtons>

    
            </div>
        </div>
    );
}

export default Dashboard_End