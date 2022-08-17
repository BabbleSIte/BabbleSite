import Header from "../components/Header";
import { useState, useRef } from "react";
import { StyledButton } from "../style/componentStyle/styledButton";
import { MemoWrapper } from "../style/pageStyle/MemoStyle";
import MemoProperties from "../components/MemoProperties";

export interface MemoProperty {
	content: string;
	textAlign: string;
	backgroundColor: string;
	color: string;
	fontFamily: string;
}

export default function NewMemo() {
	const textarea = useRef<HTMLTextAreaElement | null>(null);
	const [memoProperties, setMemoProperties] = useState<MemoProperty>({
		content: "",
		textAlign: "",
		backgroundColor: "",
		color: "",
		fontFamily: "",
	});

	function propertyHandler(name: any, value: string) {
		setMemoProperties({ ...memoProperties, [name]: value });
		if (textarea.current !== null) {
			textarea.current.style[name] = value;
		}
	}

	return (
		<MemoWrapper>
			<Header title="새로운 메모 만들기"></Header>
			<MemoProperties propertyHandler={propertyHandler} />
			<textarea
				ref={textarea}
				rows={15}
				spellCheck={false}
				onChange={e => propertyHandler("content", e.target.value)}
			/>
			<StyledButton width="200px" height="50px">
				작성 완료
			</StyledButton>
		</MemoWrapper>
	);
}
