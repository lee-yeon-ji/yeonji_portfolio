import React from "react";
import "./Popup.css"; // 스타일은 따로 분리

function Popup({ isOpen, title, children, onClose }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-container" role="dialog" aria-modal="true">
                <header className="popup-header">
                    <h2 className="popup-title">{title}</h2>
                    <button className="popup-close" onClick={onClose}>
                        ×
                    </button>
                </header>

                <main className="popup-body">
                    {children}
                </main>

                <footer className="popup-footer">
                    <button className="popup-button" onClick={onClose}>
                        닫기
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Popup;