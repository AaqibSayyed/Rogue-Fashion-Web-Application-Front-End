import { createContext, useContext, useReducer, useEffect } from "react"
import axios from "axios"
import reducer from '../reducers/ProductReducer'

const API = '/api/v1/user/viewproduct'

const AppContext = createContext()

let initialState = {
    isLoading: false,
    isError: false,
    products: [],
    men_products: [],
    women_products: [],
    kid_products: [],
    productDetails: {},
    filterProdructs: {},
    filter: {
        text: '',
        category: '',
    }
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)



    const getProducts = async (url) => {

        dispatch({ type: "IS_API_LOADING" })

        try {
            const res = await axios.get(url)
            dispatch({ type: "SET_API_DATA", payload: res.data.data })

        }
        catch (error) {
            dispatch({ type: "IS_API_ERROR" })

        }
    }


    useEffect(() => {
        getProducts(API)
    }, [])

    const getSingleProduct = async (url) => {
        dispatch({ type: "IS_SINGLE_API_LOADING" })
        try {
            const res = await axios.get(url)
            dispatch({ type: "SET_SINGLE_API_DATA", payload: res.data.data })
        }
        catch (error) {
            dispatch({ type: "IS_SINGLE_API_ERROR" })
        }
    }

    function getFilterValues(event) {
        let name = event.target.name
        let value = event.target.value
        return dispatch({ type: "UPDATE FILTER TEXT", payload: { name, value } })
    }

    useEffect(() => {
        dispatch({ type: "UPDATE PRODUCT FILTER" })
    }, [state.filter])



    return (
        <>

            <AppContext.Provider value={{ ...state, getProducts, getSingleProduct, getFilterValues }}>
                {children}
            </AppContext.Provider>

        </>
    )
}

const useGlobalProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useGlobalProductContext, }



