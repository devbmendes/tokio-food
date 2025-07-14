import { useState, useEffect } from 'react';
import '../assets/styles/cookieBanner.css'; // CSS personalizado

export default function CookieBanner() {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'true') {
            setAccepted(true);
        }
    }, []);

    function handleAccept() {
        localStorage.setItem('cookieConsent', 'true');
        setAccepted(true);
    }

    if (accepted) return null;

    return (
        <div className="cookie-banner">
            <p>Este site utiliza cookies para melhorar a sua experiência. Ao continuar, aceita a nossa política de cookies.</p>
            <button onClick={handleAccept}>Aceitar</button>
        </div>
    );
}
