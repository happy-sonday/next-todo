import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
const Container = styled.div`
    padding: 20px;
`;
const index : NextPage= ()=>{

    return (
    <>
    <GlobalStyle />
    <Container>Hello typescript! update syntex
    <h1>Hello typescript! update syntex</h1>
    <h2>Hello typescript! update syntex</h2>
    <h3>Hello typescript! update syntex</h3>
    <a>안녕하세요</a>
    </Container>
    </>
    );

}

export default index;