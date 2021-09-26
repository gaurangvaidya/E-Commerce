export const addItemToCart = (cartItems, cartItem) => {
  console.log(cartItems);
  const found = cartItems.find((item) => {
    return item.id === cartItem.id;
  });
  if (found) {
    return cartItems.map((item)=>{

        return(cartItem.id === item.id?{...item,quantity:item.quantity+1}:item);
        
        
    });
  }

  return [...cartItems, { ...cartItem, quantity: 1 }];
};
