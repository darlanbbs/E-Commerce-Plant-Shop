import * as C from "./styles";

type Props = {
  name: string;
  quantity: any;
};

const ListItems = ({ quantity, name }: Props) => {
  return (
    <>
      <C.ListGroup>
        <C.ListGroupItem>
          {name} <C.Badge color="danger">{quantity}</C.Badge>
        </C.ListGroupItem>
      </C.ListGroup>
    </>
  );
};

export default ListItems;
