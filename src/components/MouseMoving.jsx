import { useState, useEffect } from 'react';

export default function AppMovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  
    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
            pointerEvents: 'none',
            zIndex: 9999,
        }} />
    )
}