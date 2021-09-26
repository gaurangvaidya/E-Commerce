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

export const reduceItemFromCart = (cartItems,cartItem)=>{

  const found = cartItems.find((item)=>(item.id===cartItem.id));

  if(found.quantity===1) {
    return cartItems.filter((item)=>(cartItem.id !== item.id))
  }

  return cartItems.map((item)=>{
    if(item.id === cartItem.id) {
      return ({...item,quantity:item.quantity-1})
    }
    return ({...item});
  })

}