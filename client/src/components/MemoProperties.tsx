import { MemoPropertiesStyle } from "../style/componentStyle/MemoPropertiesStyle";

export default function MemoProperties() {
	return (
		<MemoPropertiesStyle>
			<ul>
				<li>
					<span>정렬</span>
					<div>
						<span className="material-symbols-outlined">format_align_left</span>
						<span className="material-symbols-outlined">
							format_align_center
						</span>
						<span className="material-symbols-outlined">
							format_align_right
						</span>
					</div>
				</li>
				<li>배경 색</li>
				<li>글자 색</li>
				<li>글씨체</li>
			</ul>
		</MemoPropertiesStyle>
	);
}
