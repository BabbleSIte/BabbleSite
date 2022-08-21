import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const PaperWrap = styled(PageWrapper)`
	position: relative;

	ul {
		max-width: 1000px;
		padding: 5rem;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;

		li {
			margin: 30px;
		}

		li:nth-child(even) {
			transform: rotate(10deg);
		}

		li:nth-child(odd) {
			transform: rotate(-10deg);
		}
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
