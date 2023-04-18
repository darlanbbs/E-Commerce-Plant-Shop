import styled from "styled-components";
import * as C from "reactstrap";

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
export const ImagesD = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Cart = styled.div`
  position: relative;
`;
export const ImagesM = styled.div`
  cursor: pointer;
  gap: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const bloco = styled.div`
  position: absolute;
  top: 6px;
  left: 23px;
  color: red;
  font-size: 18px;
`;

export const Title = styled(C.NavbarBrand)`
  font-family: Quella, sans-serif;
  font-size: 25px;
  font-weight: 100;
`;

export const TogglerArea = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
  }
`;

export const NavBar = styled(C.Navbar)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1370px) {
    padding-inline: 15%;
  }
`;

export const Nav = styled(C.Nav)`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 20px;
  justify-content: flex-start;
  @media (max-width: 768px) {
    gap: 5px;
    flex-direction: column;
    display: flex;
  }
`;

export const NavItem = styled(C.NavItem)`
  display: flex;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavItemCollapse = styled(C.NavItem)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;
