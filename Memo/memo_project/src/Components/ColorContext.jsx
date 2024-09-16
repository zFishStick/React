import React, { createContext, useState, useContext, useEffect } from 'react';

// Crea il context
const ColorContext = createContext();

// Hook per usare il ColorContext
export const useColor = () => useContext(ColorContext);

// Componente Provider per fornire lo stato del colore
export const ColorProvider = ({ children }) => {
    const initialColor = localStorage.getItem('color') || '#ffffff'; // Recupera il colore salvato
    const [color, setColor] = useState(initialColor);

    useEffect(() => {
        localStorage.setItem('color', color); // Salva il colore nel localStorage
    }, [color]);

    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return (
        <ColorContext.Provider value={{ color, changeColor }}>
            {children}
        </ColorContext.Provider>
    );
};
