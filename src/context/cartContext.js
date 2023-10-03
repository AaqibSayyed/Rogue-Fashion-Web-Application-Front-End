import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const addToCart = (amount, product) => {
    return dispatch({ type: "ADD_TO_CART", payload: { amount, product } });
  };

  const removeCartItem = (id)=>{
    return dispatch({type: "REMOVE_CART_ITEM", payload:{id}})
  }

  return (
    <CartContext.Provider value={{...state, addToCart, removeCartItem }}>
      {children}
    </CartContext.Provider> 
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };