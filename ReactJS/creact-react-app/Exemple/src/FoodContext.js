import React from 'react'
import { createContext } from 'react/cjs/react.production.min';

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    const [name, setName] = useState('Trà Xanh');
    const [location, setLocation] = useState("Thái Nguyên");

    return (
        <FoodContext.Provider value={{ name, location, setName, setLocation }}>{children}</FoodContext.Provider>
    )
}

export default FoodContext
