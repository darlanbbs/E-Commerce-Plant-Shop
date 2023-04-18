import React from "react";
import * as C from "./styles";

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => {
  return <C.Container fluid>{children}</C.Container>;
};

export default Theme;
