import React, { useEffect, useState, useRef } from 'react';
import '../Css/ColorPicker.css';

export function ColorPicker({ onColorChange }) {
    const elementRef = useRef(null);
    const initialColor = localStorage.getItem('color') || '#ffffff';
    const [color, setColor] = useState(initialColor);

    const changeColor = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        localStorage.setItem('color', newColor);
        if (onColorChange) {
            onColorChange(newColor); // Passa il nuovo colore al genitore
        }
    };

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.style.backgroundColor = color;
        }
    }, [color]);

    return (
        <div className='color-picker-container'>
            <button ref={elementRef} className='bg-change-btn'>Cambia colore dello sfondo</button>
            <input type="color" id="favcolor" className='color-input' value={color} onChange={changeColor}></input>
        </div>
    );
}
