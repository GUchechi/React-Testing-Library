import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 data-testid="testing" className="header">{title}</h1>
      {/* <h3 title="heading" className="header">
        Carts
      </h3> */}
    </>
  );
}
