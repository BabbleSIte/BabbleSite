import Header from "../components/Header";
import { useState } from "react";
import { StyledButton } from "../style/styledComponents";
import { MemoWrapper } from "../style/pageStyle/MemoStyle";
import MemoProperties from "../components/MemoProperties";

export interface MemoProperty {
	content: string;
	align: string;
	bgColor: string;
	color: string;
	font: string;
}

export default function NewMemo() {
	var [memoProperties, setMemoProperties] = useState<MemoProperty>({
		content: "",
		align: "",
		bgColor: "",
		color: "",
		font: "",
	});

	function propertyHandler(name: string, value: string) {
		setMemoProperties({ ...memoProperties, [name]: value });
	}

	return (
		<MemoWrapper>
			<Header title="새로운 메모 만들기"></Header>
			<MemoProperties propertyHandler={propertyHandler} />
			<textarea
				rows={15}
				maxLength={200}
				onChange={e => propertyHandler("content", e.target.value)}
			/>
			<StyledButton width="200px" height="50px">
				작성 완료
			</StyledButton>
		</MemoWrapper>
	);
}
