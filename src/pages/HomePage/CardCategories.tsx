import React from "react";
import * as C from "./styles";
import { Button } from "reactstrap";

type Props = {
  image: string;
  phrase?: string;
  button?: boolean;
  title: string;
};

const CardCategories = ({ image, phrase, button, title }: Props) => {
  return (
    <C.CategoriesItems>
      <C.CardIcons>
        <img src={image} alt="" />
        <C.AreaTitle>
          <h3>{title}</h3>
          {phrase ? <p>{phrase}</p> : null}
          {button ? <Button>See More</Button> : null}
        </C.AreaTitle>
      </C.CardIcons>
    </C.CategoriesItems>
  );
};

export default CardCategories;
