import { Container, Image } from "react-bootstrap";
import nba from "../assets/nba-logo.png";

const Header = () => {
  return (
    <Container>
      <Image  src={nba} width="200px" />
      <h1 className="my-2 display-3 fw-bold ">
        NBA Legends
      </h1 >
    </Container>
  );
};

export default Header;
