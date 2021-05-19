// DECLARING ACTIONS
const ACTIONS= {
     ADD_ITEM : "ADD_ITEM",
     DELETE_ITEM : "DELETE_ITEM",
     INCREMENT : "INCREMENT",
     DECREMENT : "DECREMENT"
} 

export function AddItem(product_id) {
  return { type: ACTIONS.ADD_ITEM, payload: product_id };
}

export function DeleteItem(product_id) {
  return { type: ACTIONS.DELETE_ITEM, payload: product_id };
}

export function Increment(product_id) {
  return { type: ACTIONS.INCREMENT, payload: product_id };
}
export function Decrement(product_id) {
  return { type: ACTIONS.DECREMENT, payload: product_id };
}

export {ACTIONS};
