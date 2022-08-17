import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const PaperWrap = styled(PageWrapper)`
    position: relative;

    ul {
        padding: 5rem;
        display: flex;
        justify-content: space-evenly;

        :nth-child(2n) {
            transform: rotate(10deg);
        }

        :nth-child(2n + 1) {
            transform: rotate(-10deg);
        }
    }

    button {
        background-color: #79db48;
        border: none;
        color: #fff;
        font-size: 1rem;
        width: 12rem;
        height: 3rem;
        border-radius: 1rem;
        position: fixed;
        bottom: 10%;
        right: 10%;
    }
`;

export const MemoStyle = styled.div<{
    background: string;
    color: string;
    textAlign: string;
}>`
    width: 10rem;
    height: 12rem;
    padding: 15px;
    background-color: ${(li) => li.background};
    color: ${(li) => li.color};
    text-align: ${(li) => li.textAlign};
`;
