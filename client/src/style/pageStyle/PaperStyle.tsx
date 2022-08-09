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

export const MemoStyle = styled.div<{ prop: memoInfo }>`
	width: 10rem;
	height: 12rem;
	background: ${prop => prop.prop.background};
	color: ${prop => prop.prop.color};
	text-align: ${prop => prop.prop.textAlign};
	padding: 15px;
`;
