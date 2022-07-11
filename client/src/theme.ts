import axios from "axios";

export async function getTheme(color: {
	hex: string;
	rgb: string;
	hsl: string;
	cmyk: string;
}) {
	try {
		await axios.get(
			`https://www.thecolorapi.com/scheme?hex=${color.hex}&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6`
		);
	} catch (err) {
		console.log(err);
	}
}

// export type Theme = {

// }

// export const theme:Theme[] = [
//   {
//     background:
//   }
// ]

export const backgroundList = [
	{ hex: "FCF8E8", rgb: "", hsl: "", cmyk: "" },
	{ hex: "F2D7D9", rgb: "", hsl: "", cmyk: "" },
	{ hex: "D3EBCD", rgb: "", hsl: "", cmyk: "" },
	{ hex: "4C3A51", rgb: "", hsl: "", cmyk: "" },
	{ hex: "937DC2", rgb: "", hsl: "", cmyk: "" },
	{ hex: "FF7396", rgb: "", hsl: "", cmyk: "" },
	{ hex: "FFE7BF", rgb: "", hsl: "", cmyk: "" },
	{ hex: "000000", rgb: "", hsl: "", cmyk: "" },
	{ hex: "377D71", rgb: "", hsl: "", cmyk: "" },
	{ hex: "66BFBF", rgb: "", hsl: "", cmyk: "" },
];
