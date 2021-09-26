import { createSelector } from "reselect";




const selectCart = (state) => (state.cart)

export const selectCartItems =  createSelector(
    [selectCart],
    (cart)=>(cart.cartItems)
);

export const selectTotalItems = createSelector(
    [selectCartItems],
    (cart)=>(
        cart.reduce((sum,cartItem)=>(sum+cartItem.quantity),0)
    )
)

export const selectHidden = createSelector(
    [selectCart],
    (cart)=>cart.hidden

)

