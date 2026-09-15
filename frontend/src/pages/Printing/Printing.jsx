import './Printing.css';
import { FileDown } from 'lucide-react';
import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
function Printing() {
    const role = localStorage.getItem('role');
    const [copies, setCopies] = useState(1);

    function addCopyQuantity() {
        setCopies(copies + 1);
    }

    function lessCopyQuantity() {
        if(copies > 1)
            setCopies(copies - 1);
    }
    
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
                        <div className="row-form">
                            <div className="form-group-3">
                                <label className='print-label' htmlFor='printer'>Printer</label>
                                <select name="printer" id="printer" className='printer-option'>
                                    <option value="office-a">Office Printer A</option>
                                    <option value="home-office">Home Office Jet</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className='print-label' htmlFor="paper-copies">Copies</label>
                                <div className="paper-copies">
                                    <button type='button' onClick={lessCopyQuantity}>-</button>
                                    <span className='print-counter'>{copies}</span>
                                    <button type='button' onClick={addCopyQuantity}>+</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row-form">
                            <div className="form-group-2">
                                <label className='print-label' htmlFor="paper-size">Paper Size</label>
                                <select name="paper-size" id="paper-size" className='printer-option'>
                                    <option value="a4">A4</option>
                                    <option value="short">short</option>
                                    <option value="long">long</option>
                                </select>
                            </div>
                        
                            <div className="form-group-2">
                                <label className='print-label' htmlFor="paper-pages">Pages</label>
                                <select name="paper-pages" id="paper-pages" className='printer-option'>
                                    <option value="all">All</option>
                                    <option value="odd">Odd Pages Only</option>
                                    <option value="even">Even Pages Only</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>
                        </div>

                        <div className="row-form">
                            <div className="form-group-2">
                                <label name='paper-layout' htmlFor='paper-layout'>Layout</label>
                                <select name='paper-layout' id='paper-layout' className='printer-option'>
                                    <option value="vertical">Vertical</option>
                                    <option value="Horizontal">Horizontal</option>
                                </select>
                            </div>

                            <div className="form-group-2">
                                <label name='paper-color' htmlFor='paper-color'>Color</label>
                                <select name='paper-color' id='paper-color' className='printer-option'>
                                    <option value="color">Color</option>
                                    <option value="grayscale">Grayscale</option>
                                    <option value="monochrome">MonoChrome</option>
                                </select>
                            </div>
                        </div>

                        <button className='print-button' type='submit'>Print</button>

                    </form>
                </section>
            </main>
        </div>
    );
}

export default Printing;