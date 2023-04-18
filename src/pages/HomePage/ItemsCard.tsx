import React from "react";
import * as C from "./styles";

type Props = {
  imagem: string;
  title: string;
  price: string;
};

const ItemsCard = ({ imagem, title, price }: Props) => {
  return (
    <C.CardItem>
      <C.ImagemItem alt="Sample" src={imagem} />
      <C.CardBodyItem>
        <C.CardText>{title}</C.CardText>
        <C.CardText>{price}</C.CardText>
      </C.CardBodyItem>
    </C.CardItem>
  );
};

export default ItemsCard;
