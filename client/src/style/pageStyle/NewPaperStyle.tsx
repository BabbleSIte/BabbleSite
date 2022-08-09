import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const NewPaperWrapper = styled(PageWrapper)`
	max-width: 768px;
	margin: auto;
	padding: 30px;

	form {
		margin-bottom: 20px;

		label {
			display: block;
			width: 100%;
			height: 50px;
		}

		input {
			width: 60%;
			border-bottom: 2px solid #666;
			margin-left: 20px;

			&:focus {
				outline: none;
			}
		}
	}

	.theme-section {
		margin-bottom: 3rem;

		h3 {
			margin-bottom: 30px;
		}

		ul {
			display: flex;
			flex-wrap: wrap;

			.themeColor {
				display: flex;
				border-bottom: 1px solid #c9c9c9;
				flex: 1 1 40%;
				padding: 20px;
				align-items: center;

				div {
					width: 2.5rem;
					height: 2.5rem;
					border-radius: 50%;
					margin-right: 2rem;
				}

				span {
				}

				&:hover {
					cursor: pointer;
					background-color: #f0efe0;
				}
			}
		}
	}

	.create-paper-btn {
		background-color: #79db48;
		border: none;
		width: 13rem;
		height: 3.5rem;
		color: #fff;
		border-radius: 1rem;
		margin: auto;
		font-size: 20px;
	}
`;
