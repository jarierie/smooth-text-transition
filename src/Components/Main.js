import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  background-color: #c7ea46;
`;

const Main = () => {
  return (
    <>
      <Container>
        <Text text={"Ang ganda naman ng transition?"} />
      </Container>
    </>
  );
};

export default Main;
