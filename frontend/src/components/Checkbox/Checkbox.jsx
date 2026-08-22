import './Checkbox.css';

function Checkbox({ children }) {
    return(
        <label className='checkbox'>
            <input type="checkbox" />
            <span className='checkbox-box'>✓</span>
            <span>{children}</span>
        </label>
    );
}

export default Checkbox;