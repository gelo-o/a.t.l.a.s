import './Printing.css';
import { FileDown } from 'lucide-react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
function Printing() {
    const role = localStorage.getItem('role');
    
    return (
        <div className="printing-container">
            <NavigationBar role={role}>Printing Service</NavigationBar>

            <main>
                <section className="drop-container">
                    <span className='drop-logo'>
                        <FileDown color='black' strokeWidth={1}
                        size={100}/>
                    </span>
                    <h1 className='dropfile-title'>Drop File</h1>
                    <h2 className='files-acceptable'>PDF Files Only</h2>
                    <input type="file" />
                </section>

                <section className='print-container'>
                    <h1 className='print-title'>Print Setting</h1>
                    <hr className='divider'/>

                    <form className='print-form'>
                        <label className='print-label' htmlFor='printer'>Printer</label>
                        <select name="printer" id="printer" className='printer-option'>
                            <option value="office-a">Office Printer A</option>
                            <option value="home-office">Home Office Jet</option>
                        </select>
                        <label className='print-label' htmlFor="paper-size">Paper Size</label>
                        <select name="paper-size" id="paper-size" className='printer-option'>
                            <option value="a4">A4</option>
                            <option value="short">short</option>
                            <option value="long">long</option>
                        </select>
                        <label className='print-label' htmlFor="paper-pages">Pages</label>
                        <select name="paper-pages" id="paper-pages" className='printer-option-2'>
                            <option value="all">All</option>
                            <option value="odd">Odd Pages Only</option>
                            <option value="even">Even Pages Only</option>
                            <option value="custom">Custom</option>
                        </select>



                    </form>
                </section>
            </main>
        </div>
    );
}

export default Printing;