import React from "react";
import * as C from "./styles";

type Props = {
  title: string;
  phrase: string;
  image: string;
};

const IconCard = ({ phrase, title, image }: Props) => {
  return (
    <>
      <C.Circle>
        <C.CircleImage src={image} alt="" />
      </C.Circle>
      <h4>{title}</h4>
      <p>{phrase}</p>
    </>
  );
};

export default IconCard;
