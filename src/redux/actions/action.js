export const ADD = (item, quantity = 1) => {
    return {
        type: "ADD_CART",
        payload: {
            ...item,
            orderQuantity: quantity
          }
    }
}

export const INCREMENT_QUANTITY = (item) => {
    return {
      type: "INCREMENT_QUANTITY",
      payload: item
    };
  };
  
  export const DECREMENT_QUANTITY = (item) => {
    return {
      type: "DECREMENT_QUANTITY",
      payload: item
    };
  };
  

export const REMOVE = (item) => {
    return {
      type: "REMOVE_CART",
      payload: item
    };
  };
  
  