import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className="btn"
        style={{ color: props.color }}
        onClick={() => props.onClick(props.keyValue)}
      >
        {props.keyValue}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "#000",
};

export default Button;
