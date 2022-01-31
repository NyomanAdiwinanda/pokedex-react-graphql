import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ef5350;
  display: flex;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  color: white;
`;

const DIV = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

const Index = () => {
  const navigate = useNavigate();

  return (
    <Navbar>
      <DIV>
        <img
          src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png"
          alt="pokemon logo"
          width={100}
          height={100}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <A href="">
            <p
              onClick={() => navigate("/")}
              style={{
                marginRight: "10px",
              }}
            >
              Home
            </p>
          </A>
          <p>|</p>
          <A href="">
            <p
              style={{
                marginLeft: "10px",
              }}
              onClick={() => navigate("/my-pokemon")}
            >
              My Pokemon
            </p>
          </A>
        </div>
      </DIV>
    </Navbar>
  );
};

export default Index;
