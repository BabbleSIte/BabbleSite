import { MemoPropertiesStyle } from "../style/componentStyle/MemoPropertiesStyle";
import { useEffect, useState } from "react";
import { fontArr } from "../style/font-family";
import axios from "axios";

type MemoPropertiesProp = {
	propertyHandler: (name: any, value: string) => void;
};

export default function MemoProperties({
	propertyHandler,
}: MemoPropertiesProp) {
	const [bgList, setBgList] = useState<string[]>([""]);
	useEffect(() => {
		axios
			.get(
				`https://www.thecolorapi.com/scheme?hex=${"e0de1b"}&format=json&mode=analogic&count=6`
			)
			.then(res => {
				if (res.data.colors.length === 6) {
					let list = res.data.colors.map((color: any) => {
						return color.hex.value;
					});

					return setBgList(list);
				} else {
					alert("다시 시도해주세요!");
				}
			});
	}, []);

	return (
		<MemoPropertiesStyle>
			<li className="propertyList">
				<p>정렬</p>
				<div>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("textAlign", "left")}
					>
						format_align_left
					</span>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("textAlign", "center")}
					>
						format_align_center
					</span>
					<span
						className="material-symbols-outlined"
						onClick={() => propertyHandler("textAlign", "right")}
					>
						format_align_right
					</span>
				</div>
			</li>
			<li className="propertyList">
				<p>배경 색</p>
				<ul>
					{bgList.map((bg: string) => {
						return (
							<li
								key={bg}
								style={{ backgroundColor: bg }}
								className="memoBg"
								onClick={() => propertyHandler("backgroundColor", bg)}
							></li>
						);
					})}
					<li
						key="#fff"
						style={{ backgroundColor: "#fff", border: "1px solid #000" }}
						className="memoBg"
						onClick={() => propertyHandler("backgroundColor", "#fff")}
					></li>

					<li
						key="#ddd"
						style={{ backgroundColor: "#ddd" }}
						className="memoBg"
						onClick={() => propertyHandler("backgroundColor", "#ddd")}
					></li>
				</ul>
			</li>
			<li className="propertyList">
				<p>글자 색</p>
				<div>
					<input
						type="color"
						onChange={e => propertyHandler("color", e.target.value)}
					/>
				</div>
			</li>
			<li className="propertyList">
				<p>글씨체</p>
				<select
					onChange={e => {
						propertyHandler("fontFamily", e.target.value);
					}}
				>
					{fontArr.map(font => {
						return (
							<option key={font.fontFamily} value={font.fontFamily}>
								{font.name}
							</option>
						);
					})}
				</select>
			</li>
		</MemoPropertiesStyle>
	);
}
