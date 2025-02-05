import React from 'react';
import './toast.css';

const Toast = ({ message, type }) => {
    return (
        <div className={`toast  ${type}`} data-testid="gameStatus">
            {message}
        </div>
    );
};

export default Toast;
