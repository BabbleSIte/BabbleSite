import Header from "../components/Header";

export default function Login() {
	return (
		<div>
			<Header title="로그인" />
			<div>
				<label htmlFor="id">id</label>
				<input id="id" type="text" />
				<label htmlFor="pw">pw</label>
				<input id="pw" type="password" />
			</div>
		</div>
	);
}
