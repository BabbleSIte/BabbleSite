import styled from "styled-components";

export const PageWrapper = styled.div`
	max-width: 1200px;
	margin: auto;
	color: #666;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const StyledButton = styled.button<{ width: string; height: string }>`
	width: ${prop => prop.width};
	height: ${prop => prop.height};
	min-width: 300px;
	font-size: 1.6rem;
	font-weight: 500;
	color: #fff;
	border-radius: 10rem;
	background-color: #79db48;
	border: none;
	position: absolute;
	bottom: 100px;
	left: 50%;
	transform: translate(-50%);
	cursor: pointer;

	&:hover {
		background-color: #fff;
		border: 2px solid #79db48;
		color: #79db48;
		box-shadow: 10px 10px 20px #d1d1d192;
	}
`;
