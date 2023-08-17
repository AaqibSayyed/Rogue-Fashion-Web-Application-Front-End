import { createContext, useContext } from "react";


const AppContext = createContext()

const FilterContextProvider=({children})=>{
    const getValues = ()=>{
        return "Aaqib"
    }

    const aaaqib= "Sayyed Aaqib"
    return <AppContext.Provider value={{getValues, aaaqib}}> 
        {children}
    </AppContext.Provider>
}


const useGolobalFilterContext=()=>{
    return useContext(AppContext)
}

export {FilterContextProvider,useGolobalFilterContext}