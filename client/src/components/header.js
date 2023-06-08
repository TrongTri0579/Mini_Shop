import React from "react";
import Card from "react-bootstrap/Card";
import "@fortawesome/fontawesome-free/css/all.min.css";
const header = () => {
  return (
    <Card
      bg="dark"
      text="light"
      className="text-center"
      style={{ borderRadius: "0px" }}>
      <Card.Body>
        <Card.Text>
          MINI SHOP LOVES YOU{" "}
          <i className="fa fa-heart" style={{ color: "#ff0000" }}></i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default header;
