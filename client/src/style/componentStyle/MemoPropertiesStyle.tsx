import styled from "styled-components";

export const MemoPropertiesStyle = styled.ul`
	display: flex;
	justify-content: center;
	margin-bottom: 50px;

	.propertyList {
		border-bottom: 1px solid #ddd;
		border-right: 1px solid #ddd;
		min-width: 200px;
		padding: 10px;

		&:last-child {
			border-right: none;
		}

		div {
			display: flex;
			justify-content: space-between;

			.material-symbols-outlined {
				font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
				cursor: pointer;
			}
		}
	}
`;
