import axios from "axios";
import {
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  FETCH_CART_PRODUCTS_FAILURE,
  FETCH_CART_PRODUCTS_REQUEST,
  FETCH_CART_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_CART_FAILURE,
  REMOVE_PRODUCT_CART_REQUEST,
  REMOVE_PRODUCT_CART_SUCCESS,
} from "./cart.action.types";

const fetchCartRequest = (payload) => {
  return {
    type: FETCH_CART_PRODUCTS_REQUEST,
    payload,
  };
};
const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_PRODUCTS_SUCCESS,
    payload,
  };
};
const fetchCartFailure = (payload) => {
  return {
    type: FETCH_CART_PRODUCTS_FAILURE,
    payload,
  };
};
const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());
  axios
    .get("/cartItems")
    .then((r) =>
      // console.log(r.data),
      dispatch(fetchCartSuccess(r.data))
    )
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

///----------------------------------------------------------------
// for posting new blog

const addCartRequest = (payload) => {
  return {
    type: ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};
const addCartSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};
const addCartFailure = (payload) => {
  return {
    type: ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};
const addCart = (payload) => (dispatch) => {
  // console.log(payload);
  dispatch(addCartRequest());
  axios
    .post("/cartItems", payload)
    .then((r) => (console.log(r), dispatch(addCartSuccess(r.data))))
    .catch((e) => dispatch(addCartFailure(e.data)));
};

///----------------------------------------------------------------
// for Update blog

const removeProductRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};
const removeProductSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};
const removeProductFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};
const removeCartProduct = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(removeProductRequest());
  axios
    .delete(`/cartItems/${payload}`, payload)
    .then((r) => (console.log(r), dispatch(removeProductSuccess(r.data))))
    .catch((e) => dispatch(removeProductFailure(e.data)));
};

export { fetchCart, addCart, removeCartProduct };
