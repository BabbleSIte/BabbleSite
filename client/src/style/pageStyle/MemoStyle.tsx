import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const MemoWrapper = styled(PageWrapper)`
	textarea {
		resize: none;
		display: block;
		width: 30vw;
		height: 40vh;
		margin: auto;
		padding: 15px;
		overflow: auto;
		font-size: 20px;

		&:focus {
			outline: none;
		}

		@media screen and (max-width: 560px) {
			& {
				width: 90vw;
			}
		}
	}
`;
