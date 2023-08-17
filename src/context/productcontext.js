// create a context api (context api ke andarr hi provide and consumer hota hai but context api ke andar ke consumer ka code complex hai isliye hum context hook use karte hai )
// we need a provider
// then provider will provide the context to consumer
// consumer part is done with the help of use context hook 


// creating a warehouse jaha se data pohchaya jayega 


import { createContext, useContext, useReducer, useEffect } from "react"
import axios from "axios"
import reducer from '../reducers/ProductReducer'

const API = '/api/v1/user/viewproduct'

const AppContext = createContext()

//hum initial state define kr rhe hai ye value humko state me milegi 
let initialState = {
    isLoading: false, 
    isError: false, 
    products:[],
    men_products: [],
    women_products:[],
    kid_products: [],
    productDetails:{}, 
    filterProdructs:{},
    filter:{
        text:'', 
        category:'',
    }
}


//ye children argument aapka pura react app hai .. humne index.js me app ke around AppProvider ko wrap kiya hai 
const AppProvider =({children})=>{

    //yaha jo reducer hai humne usko import reducer from '../reducers/ProductReducer' ye file me define kiya hai 

    const [state, dispatch] = useReducer(reducer, initialState)



     const getProducts = async (url)=>{

        //dispatch me hum batate hai ke humko karna kya hai or uske liye jo lagega hum wo payload me define karte hai
        //dispatch method by default reducer ke action ko call karta hai 

        dispatch({type: "IS_API_LOADING"})

        try{
        const res = await axios.get(url).catch((error)=>{return {error}})
        dispatch({type: "SET_API_DATA", payload: res.data.data})

        }
        catch(error){
            dispatch({type: "IS_API_ERROR"})

        }
    }

    
    useEffect(()=>{
        getProducts(API)
    },[])

    const getSingleProduct= async (url)=>{
        dispatch({type:"IS_SINGLE_API_LOADING"})
        try{
            const res = await axios.get(url).catch((error)=>{return {error}})
            dispatch({type:"SET_SINGLE_API_DATA", payload:res.data.data})
        }
        catch(error){
            dispatch({type:"IS_SINGLE_API_ERROR"})
        }
    }

    function getFilterValues(event){
        let name = event.target.name
        let value = event.target.value
        return dispatch({type:"UPDATE FILTER TEXT", payload:{name, value}})
   }

   useEffect(()=>{
    dispatch({type:"UPDATE PRODUCT FILTER"})
   },[state.filter])
   


    return (
        <>
        
        <AppContext.Provider value ={{...state, getProducts, getSingleProduct, getFilterValues}}>
        {children}
        </AppContext.Provider>

        </>
    )
}

//making a custom hook so that we do not have import useContext and AppContext in every componenet 

const useGlobalProductContext =()=>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalProductContext, }



