import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const PaperWrap = styled(PageWrapper)`
	padding: 5rem;
	display: flex;
	justify-content: space-evenly;

	:nth-child(2n) {
		transform: rotate(10deg);
	}

	:nth-child(2n + 1) {
		transform: rotate(-10deg);
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
	background-color: ${li => li.background};
	color: ${li => li.color};
	text-align: ${li => li.textAlign};
`;
