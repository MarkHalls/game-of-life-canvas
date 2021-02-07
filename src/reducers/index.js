import { LOADING } from "../actions";

const initialState = {
  gameState: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      const newState = {
        ...state,
        loading: true,
      };

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
