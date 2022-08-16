import { MemoPropertiesStyle } from "../style/componentStyle/MemoPropertiesStyle";
import { MemoProperty } from "../pages/NewMemo";
import { useEffect } from "react";

type MemoPropertiesProp = {
	propertyHandler: (name: string, value: string) => void;
};

export default function MemoProperties({
	propertyHandler,
}: MemoPropertiesProp) {
	// useEffect(() => {
	//   effect
	//   return () => {
	//     cleanup
	//   }
	// }, [input])

	return (
		<MemoPropertiesStyle>
			<li className="propertyList">
				<p>정렬</p>
				<div>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("align", "left")}
					>
						format_align_left
					</span>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("align", "center")}
					>
						format_align_center
					</span>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("align", "right")}
					>
						format_align_right
					</span>
				</div>
			</li>
			<li className="propertyList">
				<p>배경 색</p>
				<ul>
					{/* TODO: theme 쿼리로 받아서  */}
					<li className=""></li>
				</ul>
			</li>
			<li className="propertyList">
				<p>글자 색</p>
				<div>
					<input type="color" />
				</div>
			</li>
			<li className="propertyList">
				<p>글씨체</p>
				<select>
					{/* TODO: font-family 자료 만들어서 매핑하기 */}
					<option></option>
				</select>
			</li>
		</MemoPropertiesStyle>
	);
}
