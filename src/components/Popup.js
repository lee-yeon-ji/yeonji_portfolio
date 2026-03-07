import React from "react";

function Popup({ isOpen, title, image, children, onClose}) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
            <div className="w-[700px] max-w-[95vw] bg-white dark:bg-gray-900 rounded-xl px-5 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)]" role="dialog" aria-modal="true">
                <header className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button className="cursor-pointer" onClick={onClose}>
                       <i className="block w-[30px] h-[30px] bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url('/img/ic_close.svg')"}}></i>
                    </button>
                </header>

                <main className="mb-4 max-h-[600px] overflow-y-auto">
                    {image && (
                        <div className="h-[500px]">
                            <img src={image} alt={title} className="w-full h-full object-contain rounded-[15px]" />
                        </div>
                    )}
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Popup;
