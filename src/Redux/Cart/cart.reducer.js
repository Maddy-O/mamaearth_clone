import * as types from "./cart.action.types";

const initialState = {
  cartItems: [],
  loading: false,
  currentCartItems: {},
  error: "",
  totalCount: 0,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //----------------get-------------
    case types.FETCH_CART_PRODUCTS_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case types.FETCH_CART_PRODUCTS_SUCCESS: {
      // console.log(payload);
      return { ...state, loading: false, cartItems: payload, error: "" };
    }
    case types.FETCH_CART_PRODUCTS_FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    //-----------------create----------------------
    case types.ADD_PRODUCT_CART_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case types.ADD_PRODUCT_CART_SUCCESS: {
      // console.log(payload);
      return {
        ...state,
        loading: false,
        currentCartItems: payload,
        error: "",
        totalCount: 1,
        count: 1,
      };
    }
    case types.ADD_PRODUCT_CART_FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    default:
      return state;
  }
};

export default cartReducer;
