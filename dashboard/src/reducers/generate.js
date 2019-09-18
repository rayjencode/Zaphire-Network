import { GET_ACTIVATION, ACTIVATION_FAIL } from "../actions/types";

const initialState = {
  activations: [],
  activation: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTIVATION:
      return {
        ...state,
        activations: payload,
        loading: false
      };

    case ACTIVATION_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
