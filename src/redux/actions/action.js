export const ADD = (item, quantity,selectedColor, selectedSize ) => {
  let oQuantity = quantity;

  let oColor = selectedColor;
  let oSize =  selectedSize;
  if(!quantity){
    oQuantity = 1;
  }
  if(!selectedSize){
    oSize = " ";
  }
  if(!selectedColor){
    oColor = " ";
  }
  return {
    type: "ADD_CART",
    payload: {
      ...item,
      orderQuantity: oQuantity,
      orderColor: oColor,
      orderSize: oSize,
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

export const CLEAR_CART = () => {
  return {
    type: "CLEAR_CART"
  };
};



// Wish List Actions
export const ADD_TO_WISHLIST = (item) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: item,
  };
};

export const REMOVE_FROM_WISHLIST = (item) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: item,
  };
};

export const CLEAR_WISHLIST = () => {
  return {
    type: "CLEAR_WISHLIST",
  };
};

// Compare Actions
export const ADD_TO_COMPARE = (item) => {
  return {
    type: "ADD_TO_COMPARE",
    payload: item,
  };
};

export const REMOVE_FROM_COMPARE = (item) => {
  return {
    type: "REMOVE_FROM_COMPARE",
    payload: item,
  };
};

export const CLEAR_COMPARE = () => {
  return {
    type: "CLEAR_COMPARE",
  };
};
