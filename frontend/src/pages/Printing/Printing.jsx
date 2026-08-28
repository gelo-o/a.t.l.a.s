import './Printing.css';
import { FileDown } from 'lucide-react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
function Printing() {
    const role = localStorage.getItem('role');
    
    return (
        <div className="printing-container">
            <NavigationBar role={role}>Printing Service</NavigationBar>

            <main>
                <div className="drop-container">
                    <span className='drop-logo'>
                        <FileDown color='black' strokeWidth={1}
                        size={100}/>
                    </span>
                    <h2 className='dropfile-title'>Drop File</h2>
                    <h3 className='files-acceptable'>PDF Files Only</h3>
                    <input type="file" />
                </div>

                <div className="right-side">
                    
                    <div className="print-setting">
                        <h1>This is the printing setting</h1>
                    </div>

                    <div className="queue">
                        <h1>This is the queue area</h1>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Printing;