import { FaCoins } from "react-icons/fa";
import React from "react";

const Select = ({ currentPair, setCurrentPair, market }) => {
    const FaCoinsStyle = {
        color: "gold",
        zIndex: 1,
        position: "relative",
        left: "2.2rem",
    };


    const options = market.map((mk) => (
    <option
      selected={mk === currentPair ? true : false}
      key={mk}
      value={mk}
    >
      {mk}
    </option>
  ));

  return (
    <div className="selectContainer">
      <FaCoins style={FaCoinsStyle}/>
      <select onChange={e => setCurrentPair(e.target.value)}>{options}</select>
    </div>
  );
};

export default Select;
