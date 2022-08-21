import Header from "../components/Header";
import { useState, useEffect } from "react";
import { SignWrapper } from "../style/pageStyle/SignStyle";
import { StyledButton } from "../style/componentStyle/styledButton";

import { emailValdation } from "../signValidation";

export default function Signup() {
	const [signinInfo, setLoginInfo] = useState<{
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

	const [validation, setValidation] = useState<{
		email: undefined | boolean;
		name: undefined | boolean;
		pw: undefined | boolean;
		pwConfirm: undefined | boolean;
	}>({
		email: undefined,
		name: undefined,
		pw: undefined,
		pwConfirm: undefined,
	});

	useEffect(() => {
		let email = emailValdation(signinInfo.email);
		setValidation({ ...validation, email: email });
	}, [signinInfo.email]);

	return (
		<SignWrapper>
			<Header title="회원가입" />
			<div className="loginSection">
				<div className="input-region">
					<label htmlFor="email">e-mail</label>
					<div>
						<input
							id="email"
							type="email"
							placeholder="이메일을 입력해주세요"
							onChange={e =>
								setLoginInfo({ ...signinInfo, email: e.target.value })
							}
						/>
						<span
							style={validation.email ? { color: "#dbdbdb" } : { color: "red" }}
						>
							이메일 형식으로 입력해주세요. ex) e-mail@gmail.com
						</span>
					</div>
				</div>
				<div className="input-region">
					<label htmlFor="name">이름</label>
					<div>
						<input
							id="name"
							type="text"
							placeholder="이름을 입력해주세요"
							onChange={e =>
								setLoginInfo({ ...signinInfo, name: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="input-region">
					<label htmlFor="pw">비밀번호</label>
					<div>
						<input
							id="pw"
							type="password"
							placeholder="비밀번호를 입력해주세요"
							onChange={e =>
								setLoginInfo({ ...signinInfo, pwConfirm: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="input-region">
					<label htmlFor="pwConfirm">비밀번호 확인</label>
					<div>
						<input
							id="pwConfirm"
							type="password"
							placeholder="비밀번호를 다시 입력해주세요"
							onChange={e =>
								setLoginInfo({ ...signinInfo, pw: e.target.value })
							}
						/>
					</div>
				</div>

				<div className="btn-section">
					<StyledButton width="20vw" height="5vw">
						회원가입 완료
					</StyledButton>
				</div>
			</div>
		</SignWrapper>
	);
}
