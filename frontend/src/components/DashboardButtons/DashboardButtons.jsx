import './DashboardButtons.css'

function DashboardButtons({ children, icon, onClick }) {
    return (
        <button className='button-container' onClick={onClick}>
            <span className='button-icon'>
                {icon}
            </span>

            <span className='button-text'>
                {children}
            </span>
        </button>
    );
}

export default DashboardButtons;