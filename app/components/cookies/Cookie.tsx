"use client";
import React, { useState, useEffect } from 'react';

//popup
const CookiePopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const acceptedCookies = localStorage.getItem('acceptedCookies');
        if (!acceptedCookies) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('acceptedCookies', 'true');
        setShow(false);
    };

    const declineCookies = () => {
        setShow(false);
    };

    if (!show) {
        return null;
    }

    return (
        <div 
            className="fixed bottom-4 left-4 right-4 bg-slate-300 p-6 rounded-md shadow-md z-50 flex items-center justify-between"
            style={{ zIndex: 50 }}
        >
            <p className="text-gray-800 flex-grow">Nosso site utiliza cookies para oferecer a melhor experiência. Ao continuar, você concorda com nossa <em>Política de Privacidade.</em></p>
            <div>
                
                <button className="bg-slate-600 hover:bg-cyan-400 text-white px-4 py-2 rounded mr-2 transition duration-200" onClick={acceptCookies}><u>Aceitar</u></button>
                <button className="bg-slate-400 hover:bg-red-500 text-white px-4 py-2 rounded transition duration-200" onClick={declineCookies}>Recusar</button>
            </div>
        </div>
    );
};

export default CookiePopup;
