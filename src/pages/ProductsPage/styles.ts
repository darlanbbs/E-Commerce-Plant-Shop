import styled from "styled-components";
import * as C from "reactstrap";

export const Container = styled(C.Container)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Row = styled(C.Row)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const CategoriesArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Categories = styled.h1`
  color: #000;
`;
export const RightArea = styled(C.Col)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  gap: 20px;
  @media (max-width: 1300px) {
    height: 40%;
  }
`;
export const LeftArea = styled(C.Col)`
  width: 100%;
  height: 100%;
  @media (max-width: 1300px) {
    padding: 0 40%;
  }
`;
export const ListGroup = styled(C.ListGroup)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListGroupItem = styled(C.ListGroupItem)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Badge = styled(C.Badge)`
  background-color: red;
`;

export const Cards = styled(C.Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: solid 1px #ccc;
  @media (max-width: 1300px) {
    width: 200%;
  }
`;

export const Image = styled.img`
  width: 100%;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;
export const CardBody = styled(C.CardBody)`
  background-color: #fff;
`;
