import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    // array of input selectors
    [selectCart],
    // function for getting something out of the selectors
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0),
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden,
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0),
)
