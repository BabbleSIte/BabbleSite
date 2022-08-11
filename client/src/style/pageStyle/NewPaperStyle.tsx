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

        input[type="text"] {
            width: 70%;
            border-bottom: 2px solid #666;
            padding: 5px;
            margin: 0 0 30px 20px;

            &:focus {
                outline: none;
            }
        }
    }
`;
