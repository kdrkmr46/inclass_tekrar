import { useState } from "react";

import Card from "react-bootstrap/Card";

const PlayerCard = ({ name, img, statistics }) => {
  const [showİmage, setShowİmage] = useState(true);
  const handleClick = () => setShowİmage(!showİmage);
  return (
    <Card onClick={handleClick} role="button">
      {showİmage ? (
        <Card.Img variant="top" src={img} />
      ) : (
        <ul>
          {statistics.map((item, i) => {
            return <li key={i}> 🏀{item} </li>;
          })}
        </ul>
      )}
      <Card.Body>
        <Card.Title> {name} </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
