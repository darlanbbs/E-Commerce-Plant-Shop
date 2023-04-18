import * as C from "./styles";
import { CardTitle, CardSubtitle, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./../../components/store/actions/cart";

type Props = {
  item: any;
};

function Products({ item }: Props) {
  const products = useSelector((state: any) => state.cart);
  const cart = products.value;

  const dispatch = useDispatch();
  return (
    <C.Card>
      <C.Image alt="Sample" src={item.imagem} />
      <C.CardBody>
        <CardTitle tag="h5">{item.nome}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {item.preco}
        </CardSubtitle>
        <Button
          onClick={() => {
            dispatch(cartActions.Add(cart, item));
          }}
        >
          Add <C.Img src="./cart.png" alt="" />
        </Button>
      </C.CardBody>
    </C.Card>
  );
}
export default Products;
