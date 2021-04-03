import axios from 'axios';
import {
  SET_ALERT,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

import { setAlert } from '../actions/alert';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/user', body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => setAlert({ type: SET_ALERT, payload: error }));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};
