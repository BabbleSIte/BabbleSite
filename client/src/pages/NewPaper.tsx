import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

export default function NewPaper() {
	const [newPaper, setNwePaper] = useState({ title: "" });

	function uuid() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (c) {
				var r = (Math.random() * 16) | 0,
					v = c == "x" ? r : (r & 0x3) | 0x8;
				return v.toString(16);
			}
		);
	}

	console.log(uuid());

	return (
		<div>
			<Header title="새로운 페이퍼 만들기" />
			<div>
				<form>
					<label>
						페이퍼 제목
						<input
							value={newPaper.title}
							onChange={e =>
								setNwePaper({ ...newPaper, title: e.target.value })
							}
						/>
					</label>
					<label>
						<input />
					</label>
					<button onClick={uuid}>paper 생성하기</button>
				</form>
			</div>
		</div>
	);
}
