import { useNavigate } from "react-router-dom";
import { LandingWrap } from "../style/pageStyle/LandingStyle";
import { StyledButton } from "../style/styledComponents";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <LandingWrap>
            <StyledButton
                onClick={() => navigate("/np")}
                width="20vw"
                height="5vw"
            >
                babble site 시작하기
            </StyledButton>
        </LandingWrap>
    );
}
