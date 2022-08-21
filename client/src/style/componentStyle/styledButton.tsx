import styled from "styled-components";

export const StyledButton = styled.button<{
	width: string;
	height: string;
}>`
	width: ${prop => prop.width};
	height: ${prop => prop.height};
	display: block;
	padding: 10px;
	margin: auto;
	font-size: 1.2em;
	font-weight: 500;
	color: #fff;
	border-radius: 10rem;
	background-color: #79db48;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #fff;
		border: 2px solid #79db48;
		color: #79db48;
		box-shadow: 10px 10px 20px #d1d1d192;
	}
`;

export const KakaoLoginBtn = styled(StyledButton)`
	background-color: #fee500;
	color: #000;

	&:hover {
		color: #fee500;
		border-color: #fee500;
	}
`;
