import styled from "styled-components";
import * as C from "reactstrap";

export const Container = styled(C.Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AreaTitle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
display: flex
justify-content: center;
align-items: center;
gap:20px;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 1.3rem;
  font-weight: bold;
`;
export const SubTitle = styled.span`
  color: #999f;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ContactArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  text-align: center;
  padding: 10%;
`;

export const ContactItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;
