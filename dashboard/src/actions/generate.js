import axios from "axios";
import { setAlert } from "./alert";
import { GET_ACTIVATION, ACTIVATION_FAIL } from "./types";

// Get all activations
export const getActivations = () => async dispatch => {
  try {
    const res = await axios.get("/api/generate");
    dispatch({
      type: GET_ACTIVATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get current activation
// export const getActivationById = () => async dispatch => {
//   try {

//   } catch (err) {

//   }
// }

// Generate Activation and Security Code
export const createActivation = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/generate", formData, config);

    dispatch({
      type: GET_ACTIVATION,
      payload: res.data
    });
    dispatch(setAlert("Acitvation Code Created", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: ACTIVATION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
