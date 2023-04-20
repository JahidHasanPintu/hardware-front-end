const INIT_STATE = {
    cart: []
};

// export const cartReducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "ADD_CART":
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         case "REMOVE_CART":
//                 return {
//                   ...state,
//                   cart: state.cart.filter((item) => item.id !== action.payload.id)
//                 };    
//         default:
//             return state;
//     }

// }

const calculatePrice = (price, quantity) => {
    return price * quantity;
  };

export const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "ADD_CART":
        // Check if item is already in the cart
        const existingItem = state.cart.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          // If item is already in cart, update the quantity
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item,
                     orderQuantity: item.orderQuantity + action.payload.orderQuantity,
                     orderedPrice: calculatePrice(item.price, item.orderQuantity + action.payload.orderQuantity)
                     }
                : item
            )
          };
        } else {
          // If item is not in cart, add it to the cart
          const newItem = {
            ...action.payload,
            orderedPrice: calculatePrice(action.payload.price, action.payload.orderQuantity)
          };
          return {
            ...state,
            cart: [...state.cart, newItem]
          };
        }
      case "REMOVE_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id)
        };
      case "INCREMENT_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, 
                orderQuantity: item.orderQuantity + 1,
                orderedPrice: calculatePrice(item.price, item.orderQuantity + 1),
             }
              : item
          )
        };
      case "DECREMENT_QUANTITY":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id && item.orderQuantity > 1
              ? { ...item,
                 orderQuantity: item.orderQuantity - 1,
                 orderedPrice: calculatePrice(item.price, item.orderQuantity - 1)
                 }
              : item
          )
        };
      default:
        return state;
    }
  };
  