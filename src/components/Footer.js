import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <h1 style={{
          color: "#58b4bb",
          textAlign: "center",
          fontSize: "25px",
          textShadow: "1px 1px #a5eef3",
          margin: -30,
        }}>
          © 2022 Copyright BUYNATE
        </h1>
      </Container>
    </Box>
  );
};
export default Footer;
