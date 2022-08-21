import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";
import axios from "axios";

// import { getTheme } from "../getTheme";
import {
	NewPaperWrapper,
	ThemeListStyle,
} from "../style/pageStyle/NewPaperStyle";
import { StyledButton } from "../style/componentStyle/styledButton";

// ====================================== import 부분 끝, 함수 부분 시작

export default function NewPaper() {
	const [newPaper, setNwePaper] = useState<{
		title: string;
		uuid: string;
		theme: string[];
	}>({ title: "", uuid: "", theme: [""] });
	const [color, setColor] = useState<string>("ffffff");
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

	function getTheme() {
		try {
			axios
				.get(
					`https://www.thecolorapi.com/scheme?hex=${color.slice(
						1
					)}&format=json&mode=analogic&count=6`
				)
				.then(res => {
					if (res.data.colors.length === 6) {
						let result = res.data.colors.map((color: any) => {
							return color.hex.value;
						});

						setNwePaper({ ...newPaper, theme: result });
					} else {
						alert("다시 시도해주세요!");
					}
				});
		} catch (err) {
			return err;
		}
	}

	function postPaper() {
		const newId: string = uuid();
		navigate("/paper/" + newId);
	}

	// ====================================== 함수 부분 끝, return 부분 시작

	return (
		<>
			<Header title="새로운 페이퍼 만들기" />
			<NewPaperWrapper>
				<form onSubmit={e => e.preventDefault()}>
					<label htmlFor="paper-title-input">페이퍼 제목</label>
					<input
						value={newPaper.title}
						type="text"
						id="paper-title-input"
						placeholder="제목을 입력해주세요"
						onChange={e =>
							setNwePaper({
								...newPaper,
								title: e.target.value,
							})
						}
					/>
				</form>
				<form className="theme-section" onSubmit={e => e.preventDefault()}>
					<ColorPicker label="배경 선택하기" setColor={setColor} />
					<button onClick={getTheme}>배경 선택하기</button>
					<ul>
						{newPaper.theme.length === 6 &&
							newPaper.theme.map((color: string) => {
								return <ThemeListStyle key={color} bg={color}></ThemeListStyle>;
							})}
					</ul>
				</form>
				<StyledButton onClick={postPaper} width="15vw" height="8vh">
					paper 생성하기
				</StyledButton>
			</NewPaperWrapper>
		</>
	);
}
