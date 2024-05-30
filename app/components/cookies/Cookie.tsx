"use client";
import React, { useState, useEffect } from 'react';

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

    return (
        <div 
            className={`fixed bottom-4 left-4 right-4 bg-slate-300 p-6 rounded-md shadow-md z-50 ${show ? 'block' : 'hidden'}`}
            style={{ zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} // Adicionado display flex e ajustado o alinhamento
        >
            <p className="text-gray-800 flex-grow">Nosso site utiliza cookies para oferecer a melhor experiência. Ao continuar, você concorda com nossa <em>Política de Privacidade.</em></p>
            
            <div>
                <button className="bg-slate-600 hover:bg-blue-900 text-white px-4 py-2 rounded mr-2" onClick={acceptCookies}><u>Aceitar</u></button>
                <button className="bg-slate-400 hover:bg-red-900 text-white px-4 py-2 rounded" onClick={declineCookies}>Recusar</button>
            </div>
        </div>
    );
};

export default CookiePopup;
