import { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: auto;
  height: auto;
  max-width: 70%;
  font-size: 7rem;
  margin-top: 100px;
  margin-left: 50px;

  font-family: "Libre Franklin", sans-serif;

  p {
    display: inline-block;
    margin: auto;
  }

  div {
    display: inline-block;
    width: 2.5rem;
    height: auto;
  }
`;

const Text = ({ text }) => {
  const ref = useRef(null);
  const textArray = text.split("");

  const textReveal = () => {
    const tl = gsap.timeline({ delay: 1 });
    tl.from(ref.current.childNodes, { y: 200, stagger: 0.1, opacity: 0 });
  };

  useEffect(() => {
    textReveal();
    console.log(ref.current.childNodes);
  }, []);

  return (
    <>
      <Container>
        <p ref={ref}>
          {textArray.map((letter) => {
            return <>{letter === " " ? <div></div> : <p>{letter}</p>}</>;
          })}
        </p>
      </Container>
    </>
  );
};

export default Text;
