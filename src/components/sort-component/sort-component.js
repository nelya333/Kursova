import React from "react";
import { Button } from "react-bootstrap";

const SortComponent = (props) => {
  const sortingItems = (sorting) => {
    if (sorting === "ASC") {
      props.itemsList.sort((a, b) => a.price - b.price);
    } else if (sorting === "DESC") {
      props.itemsList.sort((a, b) => b.price - a.price);
    }
    props.setSortTotalItems([...props.itemsList]);
  };

  const buttonStyles = {
    width: "90px",
    height: "44px",
    fontSize: "13px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="mb-3 row justify-content-end">
      <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
        <div className="d-grid d-block">
          <Button
            variant={"secondary"}
            onClick={(e) => sortingItems("clear")}
            style={buttonStyles}
          >
            Скинути
          </Button>
        </div>
      </div>
      <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
        <div className="d-grid d-block">
          <Button
            variant={"secondary"}
            onClick={(e) => sortingItems("ASC")}
            style={buttonStyles}
          >
            За зростанням
          </Button>
        </div>
      </div>
      <div className="col-4 col-sm-3 col-lg-2 col-xl-1">
        <div className="d-grid d-block">
          <Button
            variant={"secondary"}
            onClick={(e) => sortingItems("DESC")}
            style={buttonStyles}
          >
            За спаданням
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;
