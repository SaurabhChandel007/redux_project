import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

// this fxn will recive something and will return 2 things
// 1. type 
// 2. data
export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
