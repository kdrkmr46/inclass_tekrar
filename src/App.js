import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import ContainerCard from "./components/ContainerCard";

function App() {
  return (
   <Container className="text-center mt-5">
    <Header />
    <ContainerCard/>
   </Container>
  );
}

export default App;
