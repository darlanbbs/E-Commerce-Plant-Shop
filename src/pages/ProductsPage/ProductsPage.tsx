import * as C from "./styles";
import Products from "./Products";
import { Row } from "reactstrap";
import { useSelector } from "react-redux";
import ListItems from "./ListItems";

interface Product {
  id: number;
  tipo: string;
  nome: string;
  preco: number;
  imagem: string;
  selected?: boolean;
  id_type: number;
  item: any;
}

interface ProductListProps {
  products: Product[];
}

interface Type {
  tipo: string;
  id_type: number;
}

const ProductsPage = () => {
  const products = useSelector((state: ProductListProps) => state.products);

  const types: Type[] = [];
  const count: Record<string, number> = {};

  for (const item of products) {
    const { tipo, id_type } = item;
    if (!types.some((t) => t.tipo === tipo)) {
      types.push({ tipo, id_type });
      count[tipo] = 1;
    } else {
      count[tipo] += 1;
    }
  }
  return (
    <C.Container>
      <C.Row>
        <C.RightArea>
          <C.CategoriesArea>
            <C.Categories>Sizes</C.Categories>
          </C.CategoriesArea>
          {types.map(({ tipo, id_type }) => (
            <ListItems name={tipo} key={id_type} quantity={count[tipo]} />
          ))}
        </C.RightArea>
        <C.LeftArea>
          <Row>
            <C.Cards>
              {products.map((item) => (
                <Products key={item.id} item={item} />
              ))}
            </C.Cards>
          </Row>
        </C.LeftArea>
      </C.Row>
    </C.Container>
  );
};

export default ProductsPage;
