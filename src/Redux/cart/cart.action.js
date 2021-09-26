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