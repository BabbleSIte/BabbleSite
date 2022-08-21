import axios from "axios";

export function getTheme(color: string) {
	try {
		axios
			.get(
				`https://www.thecolorapi.com/scheme?hex=${color.slice(
					1
				)}&format=json&mode=analogic&count=6`
			)
			.then(res => {
				if (res.data.colors.length === 6) {
					return res.data.colors.map((color: any) => {
						return color.hex.value;
					});
				} else {
					alert("다시 시도해주세요!");
				}
			});
	} catch (err) {
		return err;
	}
}
