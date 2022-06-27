import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100vw;
  height: 4rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  z-index: 9999;
  position: fixed;
  top: 0;

  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  line-height: 4rem;
  font-family: "GothicA1-Light";
`;

export default function Header({ title }: { title: string }) {
  return <HeaderWrap>
    {title}
  </HeaderWrap>;
}
