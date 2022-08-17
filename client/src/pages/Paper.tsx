import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { PaperWrap, MemoStyle } from "../style/pageStyle/PaperStyle";

type memoInfo = {
	id: number;
	message: string;
	from: string;
	background: string;
	color: string;
	textAlign: string;
};

const paperList: memoInfo[] = [
	{
		id: 0,
		message: "추카추카",
		from: "은빈",
		background: "#cde35e",
		color: "#fff",
		textAlign: "left",
	},
	{
		id: 1,
		message: "추카추카dd",
		from: "은빈",
		background: "#7aaafd",
		color: "#fff",
		textAlign: "left",
	},
	{
		id: 2,
		message: "추카추카",
		from: "은빈",
		background: "#ffe991",
		color: "#787676",
		textAlign: "left",
	},
	{
		id: 3,
		message: "추카추카",
		from: "은빈",
		background: "#ff9e91",
		color: "#787676",
		textAlign: "left",
	},
];

export default function Paper() {
	const navigate = useNavigate();
	useEffect(() => {
		// TODO: uuid를 이용해서 서버로 페이페의 데이터를 요청하고 받아와서 뿌리기.
	}, []);

	// TODO: 카카오톡 친구에게 내보내기

	return (
		<>
			<Header title="페이퍼 제목" />
			<PaperWrap>
				<ul>
					{paperList.map(li => {
						return (
							<div key={li.message + li.id}>
								<MemoStyle
									background={li.background}
									color={li.color}
									textAlign={li.textAlign}
								>
									{li.message}
									<p>{li.from}</p>
								</MemoStyle>
							</div>
						);
					})}
				</ul>
				<button type="button" onClick={() => navigate("/nm")}>
					새로운 메모 생성
				</button>
			</PaperWrap>
		</>
	);
}
