const INIT_STATE = {
  cart: [],
  wishList: [],
  compare: [],
};

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
              ? {
                ...item,
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
        ? {
            ...item,
            orderQuantity: item.orderQuantity < item.quantity // Check if orderQuantity is less than productQuantity
              ? item.orderQuantity + 1
              : item.orderQuantity,
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
            ? {
              ...item,
              orderQuantity: item.orderQuantity - 1,
              orderedPrice: calculatePrice(item.price, item.orderQuantity - 1)
            }
            : item
        )
      };
      case "CLEAR_CART":
        // Reset cart to an empty array
        return {
          ...state,
          cart: []
        };
    default:
      return state;
  }
};



export const wishListReducer = (state = INIT_STATE.wishList, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      // Check if item is already in the wish list
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item is already in wish list, do nothing
        return state;
      } else {
        // If item is not in wish list, add it to the wish list
        return [...state, action.payload];
      }
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_WISHLIST":
      return [];
    default:
      return state;
  }
};

export const compareReducer = (state = INIT_STATE.compare, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARE":
      // Check if item is already in the compare list
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item is already in compare list, do nothing
        return state;
      } else {
        // If item is not in compare list, add it to the compare list
        return [...state, action.payload];
      }
    case "REMOVE_FROM_COMPARE":
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_COMPARE":
      return [];
    default:
      return state;
  }
};