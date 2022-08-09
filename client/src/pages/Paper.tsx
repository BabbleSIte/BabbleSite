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
		from: "은빈dd",
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
		background: "#ffe991",
		color: "#787676",
		textAlign: "left",
	},
];

export default function Paper() {
	return (
		<>
			<Header title="paper title" />
			<PaperWrap>
				{paperList.map(li => {
					return (
						<div key={li.message}>
							<MemoStyle
								background={li.background}
								color={li.color}
								textAlign={li.textAlign}
							>
								{li.message}
								<span>{li.from}</span>
							</MemoStyle>
						</div>
					);
				})}
			</PaperWrap>
		</>
	);
}
