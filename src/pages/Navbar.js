import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const totalQuestion = props.data.data.length;
  return (
    <div className="navbar">
      <div className="navbar-total-question">
        Total Questions: {totalQuestion}
      </div>
      <div className="navbar-time-remaing">Time Remaining: 10 mins</div>
    </div>
  );
};

export default Navbar;
