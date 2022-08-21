import Header from "../components/Header";
import { useState } from "react";
import { SignWrapper } from "../style/pageStyle/LoginStyle";
import { StyledButton } from "../style/componentStyle/styledButton";

export default function Signup() {
	const [loginInfo, setLoginInfo] = useState<{
		email: string;
		name: string;
		pw: string;
		pwConfirm: string;
	}>({
		email: "",
		name: "",
		pw: "",
		pwConfirm: "",
	});
	return (
		<SignWrapper>
			<Header title="회원가입" />
			<div className="loginSection">
				<div className="input-region">
					<label htmlFor="email">e-mail</label>
					<input
						id="email"
						type="email"
						placeholder="이메일을 입력해주세요"
						onChange={e =>
							setLoginInfo({ ...loginInfo, email: e.target.value })
						}
					/>
				</div>
				<div className="input-region">
					<label htmlFor="name">이름</label>
					<input
						id="name"
						type="text"
						placeholder="이름을 입력해주세요"
						onChange={e => setLoginInfo({ ...loginInfo, name: e.target.value })}
					/>
				</div>
				<div className="input-region">
					<label htmlFor="pw">비밀번호</label>
					<input
						id="pw"
						type="password"
						placeholder="비밀번호를 입력해주세요"
						onChange={e =>
							setLoginInfo({ ...loginInfo, pwConfirm: e.target.value })
						}
					/>
				</div>
				<div className="input-region">
					<label htmlFor="pwConfirm">비밀번호 확인</label>
					<input
						id="pwConfirm"
						type="password"
						placeholder="비밀번호를 다시 입력해주세요"
						onChange={e => setLoginInfo({ ...loginInfo, pw: e.target.value })}
					/>
				</div>

				<StyledButton width="20vw" height="5vw">
					회원가입 완료
				</StyledButton>
			</div>
		</SignWrapper>
	);
}
