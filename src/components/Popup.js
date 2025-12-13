import React from "react";
import "../Popup.css";

function Popup({ isOpen, title, image, children, onClose}) {




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
                       <i className="ic ic-close"></i>
                    </button>
                </header>

                <main className="popup-body">
                    {image && (
                        <div className="popup-image-container">
                            <img src={image} alt={title} className="popup-image" />
                        </div>
                    )}
                    {children}
                </main>



            </div>
        </div>
    );
}


export default Popup;
