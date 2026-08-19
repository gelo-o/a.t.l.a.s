import './DashboardButtons.css'

function DashboardButtons({ children, icon }) {
    return (
        <button className='button-container'>
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