import React, { useRef, useEffect } from 'react';
import { ColorPicker } from './ColorPicker';
import { darken } from 'polished';
import { useColor } from './ColorContext';
import '../Css/MyComponent.css';

export function Footer() {
    const footerRef = useRef(null);
    const { color, changeColor } = useColor(); // Ottieni il colore e la funzione per cambiarlo dal contesto

    useEffect(() => {
        if (footerRef.current) {
            const darkenedColor = darken(0.1, color);
            footerRef.current.style.backgroundColor = darkenedColor;
        }
    }, [color]);

    return (
        <footer className='lower-bar' ref={footerRef}>
            <ColorPicker onColorChange={changeColor} />
        </footer>
    );
}
