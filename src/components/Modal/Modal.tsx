import React, { useState, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import * as C from "./styles";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../store/actions/cart";
function ModalCart(args: any) {
  interface Items {
    id: number;
    imagem: string;
    nome: string;
    preco: number;
    quantity: number;
  }
  const cart = useSelector((state: any) => state.cart);

  const Cart = cart.Cart;
  let total = 0;

  for (let i = 0; i < Cart.length; i++) {
    total += Cart[i].preco * Cart[i].quantity;
  }
  const dispatch = useDispatch();
  //modal
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  const toggle = () => setModal(!modal);

  return (
    <C.ModalArea>
      <C.Img src="./cart.png" alt="" onClick={toggle} />
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Shopping Cart</ModalHeader>
        <ModalHeader>
          <C.HeaderArea>
            <strong>ITEM</strong>
            <strong>QUANTITY</strong>
            <strong>PRICE</strong>
          </C.HeaderArea>
        </ModalHeader>
        {Cart.map((item: Items) => (
          <C.ModalBody key={item.id}>
            <C.ItemsArea>
              <C.Buttons
                color="danger"
                onClick={() => dispatch(cartActions.DeleteItem(cart, item))}
              >
                X
              </C.Buttons>
              <C.ItemArea>
                <p>{item.nome}</p>
                <C.ImgItems src={item.imagem} alt="" />
              </C.ItemArea>
              <C.ButtonsArea>
                <C.Quantity>{item.quantity}</C.Quantity>
                <C.Buttons
                  color="primary"
                  onClick={() => dispatch(cartActions.AddItem(cart, item))}
                >
                  +
                </C.Buttons>
                <C.Price>
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(Number(item.preco * item.quantity))}
                </C.Price>

                <C.Buttons
                  color="primary"
                  onClick={() => dispatch(cartActions.RemoveItem(cart, item))}
                >
                  -
                </C.Buttons>
              </C.ButtonsArea>
            </C.ItemsArea>
          </C.ModalBody>
        ))}
        <ModalFooter>
          <C.HeaderArea>
            <strong>TOTAL</strong>
            <strong>{cart.value} items</strong>
            <strong>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(total))}
            </strong>
          </C.HeaderArea>
        </ModalFooter>
        <ModalFooter>
          <Button color="primary" onClick={toggleNested}>
            Buy
          </Button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>
              <strong>CHECKOUT</strong>
            </ModalHeader>
            <ModalBody>
              <strong>Are you sure of your choices?</strong>
            </ModalBody>
            <ModalFooter>
              <a
                href="
              "
              >
                <Button color="primary" onClick={toggleNested}>
                  Done
                </Button>
              </a>
              <Button color="secondary" onClick={toggleAll}>
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </C.ModalArea>
  );
}

export default ModalCart;
