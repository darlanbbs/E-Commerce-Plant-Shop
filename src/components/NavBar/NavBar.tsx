import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collapse, NavbarToggler, NavLink, Container } from "reactstrap";
import * as C from "./styles";
import ModalCart from "../Modal/Modal";
import { useSelector } from "react-redux";

function NavAllBar(args: any) {
  const cart = useSelector((state: any) => state.cart);
  console.log("cart", cart);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <C.NavBar {...args}>
      <C.Title onClick={() => navigate("/")}>GREENMIND</C.Title>
      <C.TogglerArea>
        <C.ImagesM>
          <C.Cart>
            <ModalCart />
            <C.bloco>{cart.value}</C.bloco>
          </C.Cart>
          <C.Img src="./person.png" alt="" />
        </C.ImagesM>
        <NavbarToggler onClick={toggle} />
      </C.TogglerArea>
      <C.Nav className="me-auto" navbar>
        <C.NavItem>
          <NavLink onClick={() => navigate("/")}>Home</NavLink>
        </C.NavItem>
        <C.NavItem>
          <NavLink onClick={() => navigate("/products")}>Products</NavLink>
        </C.NavItem>
        <C.NavItem>
          <NavLink onClick={() => navigate("/contact")}>Contacts</NavLink>
        </C.NavItem>
      </C.Nav>

      <C.ImagesD>
        <C.Cart>
          <ModalCart />
          <C.bloco>{cart.value}</C.bloco>
        </C.Cart>
        <C.Img src="./person.png" alt="" />
      </C.ImagesD>
      <Collapse isOpen={isOpen} navbar>
        <C.Nav className="me-auto" navbar>
          <C.NavItemCollapse>
            <NavLink onClick={() => navigate("/")}>Home</NavLink>
          </C.NavItemCollapse>
          <C.NavItemCollapse>
            <NavLink onClick={() => navigate("/products")}>Products</NavLink>
          </C.NavItemCollapse>
          <C.NavItemCollapse>
            <NavLink onClick={() => navigate("/contact")}>Contacts</NavLink>
          </C.NavItemCollapse>
        </C.Nav>
      </Collapse>
    </C.NavBar>
  );
}

export default NavAllBar;
