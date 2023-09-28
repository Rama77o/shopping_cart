import { createContext, useContext, useEffect, useState } from "react"
import ShoppingCard from "../components/ShoppingCard";

const shoppingCartContext = createContext({});

const initialCartItems = localStorage.getItem("shopping-cart") ? JSON.parse(localStorage.getItem("shopping-cart")) : [];

const ShoppingCartProvider = ({ children }) => {
    // state for Offcanvas
    const [isOpen, setIsOpen] = useState(false);

    // state for all functions
    const [cartItems, setcartItems] = useState(initialCartItems);



    // local storage
    useEffect(() => {
        localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
    }, [cartItems]);



    // open the offcanavas
    const openCart = () => {
        setIsOpen(true)
    };
    // close the offcanavas
    const closeCart = () => {
        setIsOpen(false)
    };
    // number of quantity of offcanavas
    const cartQuantity = cartItems.reduce(
        (quantity, item) =>
            quantity + item.quantity
        , 0);

    // return quantity of element
    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };
    // add item in add and +
    const increaseCartQuantity = (id) => {
        setcartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    // -
    const decreaseCartQuantity = (id) => {
        setcartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };
    // remove
    const removeFromCart = (id) => {
        setcartItems((currItems) => currItems.filter((item) => item.id !== id));
    };

    return (
        <shoppingCartContext.Provider
            value={{
                cartItems,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                openCart,
                closeCart,
                cartQuantity
            }}>
            {children}
            <ShoppingCard isOpen={isOpen} />
        </shoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;

export const useSoppingCart = () => {
    return useContext(shoppingCartContext);
}
