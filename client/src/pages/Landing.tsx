import { useNavigate } from "react-router-dom";
import { LandingWrap } from "../style/pageStyle/LandingStyle";
import { StyledButton } from "../style/componentStyle/styledButton";

export default function Landing() {
	const navigate = useNavigate();

	return (
		<LandingWrap>
			<StyledButton
				onClick={() => navigate("/signup")}
				width="20vw"
				height="5vw"
			>
				회원가입하러 가기
			</StyledButton>
			<StyledButton
				onClick={() => navigate("/signin")}
				width="20vw"
				height="5vw"
			>
				로그인하러 가기
			</StyledButton>

			<StyledButton onClick={() => navigate("/np")} width="20vw" height="5vw">
				babble site 시작하기
			</StyledButton>
		</LandingWrap>
	);
}
