import React from "react";

function CardBtn(props) {
  return (
    <button onClick={props.onClick} className={`card-btn ${props["data_value"]}`}>
      {props.name}
    </button>
  );
}

export default CardBtn;
