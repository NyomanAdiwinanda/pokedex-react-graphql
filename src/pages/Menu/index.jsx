import React, { useContext } from "react";
import { MenuContext } from "react-flexible-sliding-menu";
import styled from "@emotion/styled";

const Menu = styled.div`
  margin-left: 20px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: 20px;
`;

const Index = () => {
  const { closeMenu } = useContext(MenuContext);

  return (
    <Menu>
      <p onClick={closeMenu}>Home</p>
      <p>My Pokemon</p>
    </Menu>
  );
};

export default Index;
