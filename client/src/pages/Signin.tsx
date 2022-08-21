import Header from "../components/Header";
import { useState } from "react";
import { SignWrapper } from "../style/pageStyle/LoginStyle";
import {
	StyledButton,
	KakaoLoginBtn,
} from "../style/componentStyle/styledButton";

import { useNavigate } from "react-router-dom";

export default function Signin() {
	const [loginInfo, setLoginInfo] = useState<{ id: string; pw: string }>({
		id: "",
		pw: "",
	});

	const navigate = useNavigate();
	return (
		<SignWrapper>
			<Header title="로그인" />
			<div className="loginSection">
				<div className="input-region">
					<label htmlFor="id">아이디</label>
					<input
						id="id"
						type="text"
						placeholder="아이디를 입력해주세요"
						onChange={e => setLoginInfo({ ...loginInfo, id: e.target.value })}
					/>
				</div>
				<div className="input-region">
					<label htmlFor="pw">비밀번호</label>
					<input
						id="pw"
						type="password"
						placeholder="비밀번호를 입력해주세요"
						onChange={e => setLoginInfo({ ...loginInfo, pw: e.target.value })}
					/>
				</div>

				<div className="btn-section">
					<div>
						<KakaoLoginBtn width="150px" height="50px">
							카카오 로그인
						</KakaoLoginBtn>
						<StyledButton width="150px" height="50px">
							로그인
						</StyledButton>
					</div>
					<StyledButton
						onClick={() => navigate("/signup")}
						width="150px"
						height="50px"
					>
						회원가입
					</StyledButton>
				</div>
			</div>
		</SignWrapper>
	);
}
