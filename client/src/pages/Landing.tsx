import styled from "styled-components";

const LandingWrap = styled.div`
  /* width: 100vw;
  height: 100vh;
  position: relative;
  background-color: blue; */

  button {
    width: 400px;
    height: 80px;
    font-size: 1.6rem;
    font-family: "Noto Sans KR";
    font-weight: 500;
    color: #fff;
    border-radius: 10rem;
    background-color: #79db48;
    border: none;
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    
    &:hover {
      background-color: #fff;
      border: 2px solid #79db48;
      color: #79db48;
      /* box-shadow: inset 5px 5px 20px #d1d1d192; */
    }
  }
`;

export default function Landing() {
  return (
    <LandingWrap>
      <button>babble site 시작하기</button>
    </LandingWrap>
  );
}
