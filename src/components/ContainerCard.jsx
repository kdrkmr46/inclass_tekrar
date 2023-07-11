import { useState } from "react";
import Form from "react-bootstrap/Form";

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
    </>
  );
};

export default ContainerCard;
