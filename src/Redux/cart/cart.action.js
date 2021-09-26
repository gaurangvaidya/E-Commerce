export const toggleHiddenCart = () => {
    return({
        "type":"TOGGLE_CART_HIDDEN"
    })
    
}


export const addItemToCart = (item) => {

    return({
        "type":"ADD_ITEM_TO_CART",
        "payload":item
    })

}

export const removeItemFromCart = (item) => {
    return({
        "type":"REMOVE_ITEM_FROM_CART",
        "payload":item
    });
}

export const reduceItemFromCart = (item) => {
    return({
        "type":'REDUCE_ITEM_FROM_CART',
        "payload":item
    })
}

