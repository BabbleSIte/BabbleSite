import Header from "../components/Header";
import { useState } from "react";
import { LoginWrapper } from "../style/pageStyle/LoginStyle";
import { StyledButton } from "../style/componentStyle/styledButton";

export default function Signup() {
	const [loginInfo, setLoginInfo] = useState<{
		id: string;
		pw: string;
		pwConfirm: string;
	}>({
		id: "",
		pw: "",
		pwConfirm: "",
	});
	return (
		<LoginWrapper>
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

				<div>
					<StyledButton width="150px" height="50px">
						로그인
					</StyledButton>
				</div>
			</div>
		</LoginWrapper>
	);
}
