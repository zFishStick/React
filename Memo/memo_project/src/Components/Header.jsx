import React, { useRef, useEffect } from 'react';
import { useColor } from './ColorContext';
import { darken } from 'polished';
import '../Css/MyComponent.css';

export function Header() {
    const headerRef = useRef(null);
    const { color } = useColor(); // Ottieni il colore dal contesto

    useEffect(() => {
        if (headerRef.current) {
            const darkenedColor = darken(0.1, color);
            headerRef.current.style.backgroundColor = darkenedColor;
        }
    }, [color]);

    return (
        <header className='upper-bar' ref={headerRef}>
            <h1 className='title'>Memo</h1>
        </header>
    );
}
