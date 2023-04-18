import styled from "styled-components";
import * as C from "reactstrap";

export const ModalArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalBody = styled(C.ModalBody)`
  width: 100%;

  height: 50%;
  display: flex;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
export const ImgItems = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 170%;
  gap: 20px;
`;

export const ItemsArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;
export const ItemArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonsArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const Buttons = styled(C.Button)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 5px;
  border: solid 1px #ccc;
`;
export const Quantity = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 5px 20px;
  border: solid 1px #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownToggle = styled(C.DropdownToggle)`
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
