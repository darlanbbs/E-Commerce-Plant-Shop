import * as C from "./styles";
import {
  CardImg,
  Card,
  Button,
  CardBody,
  CardFooter,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";
import ItemsCard from "./ItemsCard";
import { useNavigate } from "react-router-dom";
import IconCard from "./IconCard";
import CardCategories from "./CardCategories";
import Costumers from "./Costumers";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.AreaAnnouncement>
        <Card>
          <CardImg
            alt="Card image cap"
            src="./overlayImage1.png"
            width="100%"
          />
        </Card>
      </C.AreaAnnouncement>
      <C.SellingArea>
        <C.SellingItems>
          <C.FirstItems>
            <C.CardItemAnnoucement className="my-2">
              <CardBody>
                <CardTitle tag="h5">
                  Best Selling<br></br>Plants
                </CardTitle>
                <CardText>
                  Easiest way to healthy life by buying your favorite plants
                </CardText>
                <CardFooter>
                  <Button onClick={() => navigate("/products")}>
                    See More →{" "}
                  </Button>
                </CardFooter>
              </CardBody>
            </C.CardItemAnnoucement>
          </C.FirstItems>
          <C.OtherItems>
            <ItemsCard
              imagem="./products/low/Hera.png"
              price="₱ 1,400.00"
              title="Natural Plants"
            />
            <ItemsCard
              imagem="./products/high/bananaTree.png"
              price="₱ 900.00"
              title="Artificial Plants"
            />
            <ItemsCard
              imagem="./products/low/cacto.png"
              price="₱ 3,500.00"
              title="Artificial Plants"
            />
          </C.OtherItems>
        </C.SellingItems>
      </C.SellingArea>

      <C.About>
        <C.AreaTitle>
          <C.Title>About Us</C.Title>
          <C.SubTitle>Order now and appreciate the beauty of nature</C.SubTitle>
        </C.AreaTitle>
        <C.Icons>
          <C.IconsArea>
            <IconCard
              image="./potted-plant.png"
              title="Larger Assortment"
              phrase="we offer many different types of products with fewer variations in each category."
            />
          </C.IconsArea>
          <C.IconsArea>
            <IconCard
              image="./box.png"
              title="Fast & Free Shipping"
              phrase="4-day or less delivery time, free shipping and an expedited delivery option."
            />
          </C.IconsArea>
          <C.IconsArea>
            <IconCard
              image="./phone-call.png"
              title="24/7 Support"
              phrase="answers to any business related inquiry 24/7 and in real-time."
            />
          </C.IconsArea>
        </C.Icons>
      </C.About>
      <Container fluid>
        <C.Categories>
          <C.AreaTitle>
            <C.Title>Categories</C.Title>
            <C.SubTitle>Find what you are looking for</C.SubTitle>
          </C.AreaTitle>
          <C.CategoriesItem>
            <CardCategories image="./Acessorie1.png" title="Natural Plants" />
            <CardCategories
              image="./Acessorie2.png"
              title="Plant Acessories"
              phrase="Horem ipsum dolor sit amet, consectetur adipiscing elit."
              button={true}
            />
            <CardCategories
              image="./Acessories3.png"
              title="Artificial Plants"
            />
          </C.CategoriesItem>
        </C.Categories>
      </Container>
      <Container>
        <C.Costumers>
          <C.AreaTitle>
            <C.Title>What customers say about GREEMIND?</C.Title>
          </C.AreaTitle>
          <Costumers />
        </C.Costumers>
      </Container>
    </C.Container>
  );
};

export default HomePage;
