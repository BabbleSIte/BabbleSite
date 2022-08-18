import styled from "styled-components";

export const LoginWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #e7f8de;

	.loginSection {
		width: 500px;
		height: 500px;
		border-radius: 20px;
		background-color: #fff;
		margin: 60px auto;
		padding: 5%;
		position: relative;

		@media screen and (max-width: 550px) {
			width: 94%;
		}

		.input-region {
			display: flex;
			width: 100%;
			height: 100px;
			align-items: center;
			justify-content: space-between;

			label {
				color: #666;
				display: block;
				margin-right: 20px;
				min-width: 100px;
			}
			input {
				border-bottom: 2px solid #666;
				flex-grow: 1;
				padding: 5px;

				&:focus {
					border-color: #79db48;
					outline: none;
				}
			}
		}
	}
`;
