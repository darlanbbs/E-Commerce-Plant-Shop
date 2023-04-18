interface ICartAction {
  type: string;
  cart: any[];
}

interface IProductAction {
  type: string;
  product: any;
}

export const Add = (
  cart: any[],
  product: any
): ICartAction & IProductAction => {
  return {
    type: "ADD_TO_CART",
    cart,
    product,
  };
};

export const AddItem = (
  cart: any[],
  product: any
): ICartAction & IProductAction => {
  return {
    type: "ADD_ITEM",
    cart,
    product,
  };
};

export const RemoveItem = (
  cart: any[],
  product: any
): ICartAction & IProductAction => {
  return {
    type: "REMOVE_ITEM",
    cart,
    product,
  };
};

export const DeleteItem = (
  cart: any[],
  product: any
): ICartAction & IProductAction => {
  return {
    type: "DELETE_ITEM",
    cart,
    product,
  };
};

export default {
  AddItem,
  RemoveItem,
  Add,
  DeleteItem,
};
