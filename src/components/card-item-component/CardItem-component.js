import React from "react";
import { Button, Card } from "react-bootstrap";

const CardItemComponent = (props) => {
  const addItem = () => {
    props.addItem(props.card);
  };

  const removeItem = () => {
    props.removeItem(props.card);
  };

  const buttonStyles = {
    width: "60px",
    height: "30px",
    fontSize: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const rowStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  };

  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
      style={{ marginBottom: "20px", boxShadow: "0px 0px 11px -8px black" }}
    >
      <Card>
        <Card.Img variant="top" src={props.card.imgurl} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontSize: "17px" }}>
            {props.card.name}
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <strong>{props.card.price} грн.</strong>
          </Card.Text>
          <div style={rowStyles}>
            <div>
              <div className="d-grid d-block">
                <Button
                  variant="success"
                  onClick={addItem}
                  style={buttonStyles}
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <div className="d-grid d-block">
                <Button variant="info" style={buttonStyles}>
                  {" "}
                  {props.totalItems.length} шт.
                </Button>
              </div>
            </div>
            <div>
              <div className="d-grid d-block">
                <Button
                  variant="danger"
                  onClick={removeItem}
                  style={buttonStyles}
                >
                  -
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardItemComponent;
