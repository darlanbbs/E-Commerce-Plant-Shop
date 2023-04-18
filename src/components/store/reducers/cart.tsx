import productList from "./product";

const INITIAL_STATE = {
  value: 0,
  products: productList,
  Cart: [],
};

interface IITem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
export default function cart(state = INITIAL_STATE, action: any) {
  function updateCartItems(cartItems: IITem[], newItem: IITem) {
    const existingCartItem = cartItems.find((item) => item.id === newItem.id);
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...cartItems, newItem];
    }
  }

  function decrementCartItem(cartItems: IITem[], itemId: number) {
    return cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = { ...action.product, quantity: 1 };
      const updatedCartIncrement = updateCartItems(state.Cart, newItem);
      return {
        ...state,
        value: state.value + 1,
        Cart: updatedCartIncrement,
      };
    case "ADD_ITEM":
      const updateCart = updateCartItems(state.Cart, action.product);
      return {
        ...state,
        value: state.value + 1,
        Cart: updateCart,
      };
    case "REMOVE_ITEM":
      const updatedCartDecrement = decrementCartItem(
        state.Cart,
        action.product.id
      );
      return {
        ...state,
        value: state.value - 1,
        Cart: updatedCartDecrement,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        value: action.cart.value - action.product.quantity,
        Cart: state.Cart.filter((item) => {
          return item !== action.product;
        }),
      };

    default:
      return state;
  }
}
