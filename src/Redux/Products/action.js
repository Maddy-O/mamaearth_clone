import axios from "axios";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./action.types";

const fetchProductsRequest = (payload) => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
    payload,
  };
};
const fetchProductsSuccess = (payload) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  };
};
const fetchProductsFailure = (payload) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload,
  };
};
const fetchProducts = (payload) => (dispatch) => {
  dispatch(fetchProductsRequest());
  axios
    .get("/products")
    .then((r) => dispatch(fetchProductsSuccess(r.data)))
    .catch((e) => dispatch(fetchProductsFailure(e.data)));
};

//-----------------------------------For single product----------------

const fetchSingleProductRequest = (payload) => {
  return {
    type: FETCH_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};
const fetchSingleProductSuccess = (payload) => {
  return {
    type: FETCH_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};
const fetchSingleProductFailure = (payload) => {
  return {
    type: FETCH_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};
const fetchSingleProduct = (payload) => (dispatch) => {
  dispatch(fetchSingleProductRequest());
  axios
    .get(`/products/${payload}`)
    .then((r) => dispatch(fetchSingleProductSuccess(r.data)))
    .catch((e) => dispatch(fetchSingleProductFailure(e.data)));
};
export { fetchProducts, fetchSingleProduct };
