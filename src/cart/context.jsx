import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS } from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const AppContext = createContext();


const initialState = {
    loading: false,
    cart: new Map(),
};


export const AppProviderCart = ({ children }) => {
    const [state, dispatsh] = useReducer(reducer, initialState);
    const {totalAmount, totalCost} = getTotals(state.cart);

    const clearCart = () => {
        dispatsh({type: CLEAR_CART})
    }

    const removeItem = (id) => {
        dispatsh({type: REMOVE, payload: {id}})
    }

    const increaseItem = (id) => {
        dispatsh({type: INCREASE, payload: {id}})
    }

    const decreaseItem = (id) => {
        dispatsh({type: DECREASE, payload: {id}})
    }

    const fetchData = async () => {
        dispatsh({type: LOADING});
        const response = await fetch(url);
        const cart = await response.json();
        dispatsh({type: DISPLAY_ITEMS, payload: {cart}})
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <AppContext.Provider value={{ ...state, clearCart, removeItem, increaseItem, 
        decreaseItem,totalAmount, totalCost }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};