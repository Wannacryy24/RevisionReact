import { createContext, useContext, useState } from "react";

export const valueContext  = createContext();


export const ValueContextProvider = ({children}) => {
    const [firstVale , setFirstValue] = useState(0)
    return (
        <valueContext.Provider value={{
            firstVale , setFirstValue
        }}> 
            {
                children
            }
        </valueContext.Provider>
    )
}
