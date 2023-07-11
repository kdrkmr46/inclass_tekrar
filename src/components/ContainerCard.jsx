import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const ContainerCard = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        placeholder="Search Player"
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container">
        <Row>
          {data.filter((player) =>
            player.name.toLowerCase().includes(search.trim().toLowerCase())

          ).map((player) => {
            return(
                <Col>
                <PlayerCard {...player} />
                </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
