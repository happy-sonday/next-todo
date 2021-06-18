import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const Container = styled.div`
  padding: 20px;
`;
const index: NextPage = () => {
  return (
    <Container>
      <h1>hello Styled-components</h1>
      <h2>hello Styled-components</h2>
      <h3>hello Styled-components</h3>
    </Container>
  );
};

export default index;
