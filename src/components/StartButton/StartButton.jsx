import "./StartButton.css";

function startButton({ children, onClick, className = "" }) {
    return(
        <button className={`start-button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default startButton;