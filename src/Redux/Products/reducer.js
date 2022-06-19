import * as types from "./action.types";

const initialState = {
  products: [],
  loading: false,
  currentProduct: {},
  error: "",
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_PRODUCTS_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case types.FETCH_PRODUCTS_SUCCESS: {
      // console.log(payload);
      return { ...state, loading: false, products: payload, error: "" };
    }
    case types.FETCH_PRODUCTS_FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    case types.FETCH_SINGLE_PRODUCT_REQUEST: {
      return { ...state, loading: true, error: "" };
    }
    case types.FETCH_SINGLE_PRODUCT_SUCCESS: {
      // console.log(payload);
      return { ...state, loading: false, currentProduct: payload, error: "" };
    }
    case types.FETCH_SINGLE_PRODUCT_FAILURE: {
      return { ...state, loading: false, error: payload };
    }
    default:
      return state;
  }
};

export default productsReducer;
