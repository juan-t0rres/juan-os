import { useState, useEffect } from "react";

export default function Loading() {
    const [progress, setProgress] = useState(20);
    const [message, setMessage] = useState('BOOTING JUAN-OS...');

    useEffect(() => {
        setTimeout(() => {
            setProgress(40);
            setMessage('BRRRRRRRR');
            setTimeout(() => {
                setProgress(80);
                setMessage('WHY IS THIS TAKING SO LONG?');
                setTimeout(() => {
                    setProgress(100);
                    setMessage('PLZ LOAD XD');
                }, 650);
            }, 650);
        }, 850);
    }, []);

    return <div className="loading crt">
        <div className="loading-screen">
        <div className="primary" style={{ width: 128, height: 128 }}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z" fill="currentColor"/> </svg>
        </div>
        <div className="loading-progress">
            <div className="loading-bar">
                <div className="loading-bar-color" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="pixel-font" style={{ color: "white", fontSize: 10 }}>{message}</p>
        </div>
        </div>
        <div className="loading-footer">
        <p>Juan Torres © 2022</p>
        <p>All Rights Reserved</p>
        </div>
    </div>
}