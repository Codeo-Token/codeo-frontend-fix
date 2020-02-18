<<<<<<< HEAD
import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post("https://codeoajalah.herokuapp.com/api/users/register", user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user) => dispatch => {
    axios.post("https://codeoajalah.herokuapp.com/api/users/login", user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
=======
import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../helper/setAuthToken";
import jwt_decode from "jwt-decode";

export const registerUser = (user, history) => async dispatch => {
  axios
    .post(
      "https://database-project-adopets.herokuapp.com/api/users/register",
      user
    )
    .then(result => {
      if (result.status === 200) {
        history.push("/register");
        dispatch({ type: SET_CURRENT_USER, payload: false });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({ type: GET_ERRORS, payload: false });

    });
};

export const loginUser = user => async dispatch => {
  axios
    .post("https://database-project-adopets.herokuapp.com/api/users/login", user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setLogin(decoded));
      dispatch({ type: SET_CURRENT_USER, payload: false})
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({ type: GET_ERRORS, payload: false})

    });
};

export const setLogin = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setLogin({}));
  history.push("/Register");
};




export const getProducts = () => async dispatch => {
  try {
    let products = await axios.get(
      `https://database-project-adopets.herokuapp.com/api/product`
    );
    dispatch({
      type: GET_PRODUCTS_LOADING,
      payload: true
    });
    if (products.status === 200) {
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data.result
      });
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: false
      });
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
  }
};

export const getProduct = (id, history) => async dispatch => {
  try {
    let product = await axios.get(
      `https://database-project-adopets.herokuapp.com/api/product/${id}`
    );
    if (product.status === 200) {
      dispatch({
        type: GET_PRODUCT,
        payload: product.data.result
      });
      history.push("/productdesc");
>>>>>>> 8fb1c3ab820e29a0454a98950880fe56c41e2ce7
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    });
  }
};