import styled from "styled-components";

const LandingWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: blue;

  button {
    width: 300px;
    height: 50px;
    border-radius: 20%;
    background-color: transparent;
    border: 2px solid #fff;
    color: blue;
    position: absolute;
    bottom: 200px;
  }
`;

export default function Landing() {
  return (
    <LandingWrap>
      <button>babble site 시작하기</button>
    </LandingWrap>
  );
}
