import styled from "styled-components";
import { PageWrapper } from "../styledComponents";

export const NewPaperWrapper = styled(PageWrapper)`
    max-width: 768px;
    margin: auto;
    padding: 30px;

    form {
        display: flex;
        padding: 0 10px 20px;

        label {
            width: 30%;
        }

        input {
            width: 70%;
            border-bottom: 2px solid #666;
            padding: 5px;
            margin: 0 0 30px 20px;

            &:focus {
                outline: none;
            }
        }
    }

    .theme-section {
        margin-bottom: 3rem;

        h3 {
            margin-bottom: 30px;
            padding: 10px;
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
                    background-color: #e4f6d9;
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
        display: block;
        margin: auto;
        font-size: 20px;
    }
`;
