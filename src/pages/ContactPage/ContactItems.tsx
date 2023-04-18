import React from "react";
import * as C from "./styles";
type Props = {
  image: string;
  title: string;
  text: string;
};

const ContactItems = ({ image, title, text }: Props) => {
  return (
    <>
      <C.ContactItems>
        <C.Image src={image} alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
      </C.ContactItems>
    </>
  );
};

export default ContactItems;
