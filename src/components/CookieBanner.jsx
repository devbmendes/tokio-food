import { useState, useEffect } from 'react';
import '../assets/styles/cookieBanner.css'; // CSS personalizado

export default function CookieBanner() {
    const [accepted, setAccepted] = useState(false);
    const [showBannner, setShowBanner] = useState(true);
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
    function handleDeny() {
        setShowBanner(false)
    }

    if (showBannner && !accepted)

        return (
            <div className="cookie-banner">
                <p>Este site utiliza cookies para melhorar a sua experiência. Ao continuar, aceita a nossa política de cookies.</p>
                <div>
                    <button onClick={handleAccept} className='acept'>Aceitar</button>
                    <button onClick={handleDeny}>Rejeitar</button>
                </div>
            </div>
        );
}
