import React from "react";
import { PageHeader } from "antd";
import "./style.css";

import Logo from "../../assets/pokemon-logo.png"

const Header: React.FC = () => {
  return (
    <PageHeader
      className="header"
    >
      <img src={Logo} className="logo" alt="pokemon logo" />
      <p className="buttom">LOGOUT</p>
    </PageHeader>
  );
};

export default Header;
