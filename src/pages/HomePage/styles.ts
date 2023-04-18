import styled from "styled-components";
import * as C from "reactstrap";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AreaAnnouncement = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

export const SellingArea = styled(C.Row)`
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SellingItems = styled(C.Col)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
  @media (min-width: 1300px) {
    padding-inline: 15%;
  }
`;

export const FirstItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const OtherItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media (max-width: 1600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardItem = styled(C.Card)`
  width: 240px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const CardItemAnnoucement = styled(C.Card)`
  width: 220px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImagemItem = styled.img`
  width: 100%;
  height: 80%;
`;

export const CardBodyItem = styled(C.CardBody)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const CardText = styled(C.CardText)`
  margin: 0;
`;

export const About = styled.div`

width: 100%;
height: 100%;
display: flex
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
@media (min-width: 1370px) {
  padding-inline: 15%;
}
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

export const Title = styled.h1`
  color: #000;
  font-size: 2rem;
  font-weight: bold;
`;
export const SubTitle = styled.span`
  color: #999f;
  font-size: 1rem;
  font-weight: 400;
`;

export const Icons = styled(C.Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 5%;
  @media (max-width: 756px) {
    flex-direction: column;
  }
`;
export const IconsArea = styled(C.Col)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
`;

export const CardIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Circle = styled.div`
  background-color: #c1dcdc;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const Categories = styled.div`

width: 100%;
height: 100%;
display: flex
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
`;

export const CategoriesItems = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1dcdc;
`;

export const CategoriesItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

export const Costumers = styled.div`

width: 100%;
height: 100%;
display: flex
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 10%;
`;
