import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Header from "../components/Header";
import styled from "styled-components";
import { backgroundList, getTheme } from "../theme";
import { PageWrapper } from "../styledComponents";

const NewPaperWrapper = styled(PageWrapper)`
	.themeColor {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
	}
`;

export default function NewPaper() {
	const [newPaper, setNwePaper] = useState({ title: "", uuid: "" });
	const navigate = useNavigate();

	function uuid() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				let r = (Math.random() * 16) | 0,
					v = c === "x" ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}

	function postPaper() {
		let newId = uuid();
		// try {
		// 	axios.post("", { data: { ...newPaper, uuid: newId } }).then(res => {
		// 		if (res.status === 200) {
		// 			navigate("/paper/" + newId);
		// 		}
		// 	});
		// } catch (err) {
		// 	window.alert("");
		// }
		console.log(newId);
		navigate("/paper/" + newId);
	}

	return (
		<>
			<Header title="새로운 페이퍼 만들기" />
			<NewPaperWrapper>
				<div>
					<form onSubmit={e => e.preventDefault()}>
						<label>
							페이퍼 제목
							<input
								value={newPaper.title}
								onChange={e =>
									setNwePaper({ ...newPaper, title: e.target.value })
								}
							/>
						</label>
					</form>
					<div>
						<h3>테마 선택</h3>
						<ul>
							{backgroundList.map(list => {
								return (
									<li
										key={"#" + list.hex}
										className="themeColor"
										style={{ backgroundColor: "#" + list.hex }}
										onClick={() => getTheme(list)}
									>
										#{list.hex}
									</li>
								);
							})}
						</ul>
					</div>
					<button onClick={postPaper}>paper 생성하기</button>
				</div>
			</NewPaperWrapper>
		</>
	);
}
