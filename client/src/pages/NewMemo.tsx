import Header from "../components/Header";
import { StyledButton } from "../style/styledComponents";
import MemoProperties from "../components/MemoProperties";

export default function NewMemo() {
	return (
		<div>
			<Header title="새로운 메모 만들기"></Header>
			<MemoProperties />
			<textarea></textarea>
			<StyledButton width="200px" height="50px">
				작성 완료
			</StyledButton>
		</div>
	);
}
