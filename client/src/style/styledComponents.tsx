import styled from "styled-components";

export const PageWrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    color: #666;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const StyledButton = styled.button``;
// 페이지마다 있는 초록색 버튼들 합치기 => 전체적인 느낌과 호버 효과 통일하기
