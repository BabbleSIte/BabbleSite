import { useNavigate } from "react-router-dom";
import { LandingWrap } from "../style/pageStyle/LandingStyle";

export default function Landing() {
	const navigate = useNavigate();

	return (
		<LandingWrap>
			<button onClick={() => navigate("/np")}>babble site 시작하기</button>
		</LandingWrap>
	);
}
