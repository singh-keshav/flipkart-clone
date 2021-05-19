import { ACTIONS as Actions } from "./actions.js";
import products from "./productlist.js";

const initialState = {
  items: [],
  products: products,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      //  const newState={...state}
      // if (!(newState.items.find((i) => i.id === action.payload)))
      //   newState.items.push({ id: action.payload, count: 1 });
      // return newState;
      if (!state.items.find((i) => i.id === action.payload))
        return {
          ...state,
          items: [...state.items, { id: action.payload, count: 1 }],
        };
      return state;

    case Actions.DELETE_ITEM:
      return Object.assign({}, state, {
        items: state.items.filter((i) => i !== action.payload),
      });
    case Actions.INCREMENT:
      return;
    case Actions.DECREMENT:
      return;
    default:
      return state;
  }
};
export default reducer;
