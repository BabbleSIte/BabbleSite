import axios from "axios";

export async function getTheme(color: {
    hex: string;
    rgb: string;
    hsl: string;
    cmyk: string;
}) {
    try {
        await axios
            .get(
                `https://www.thecolorapi.com/scheme?hex=${color.hex}&rgb=${color.rgb}&hsl=${color.hsl},&cmyk=${color.hsl}&format=json&mode=analogic&count=6`
            )
            .then((res) => {
                console.log(res);
            });
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
    {
        hex: "FCF8E8",
        rgb: "252, 248, 232",
        hsl: "45,77%,95%",
        cmyk: "0%,2%,8%,1%",
    },
    {
        hex: "F2D7D9",
        rgb: "242, 215, 217",
        hsl: "358,50%,90%",
        cmyk: "0%,10%,10%,5%",
    },
    {
        hex: "D3EBCD",
        rgb: "211, 235, 205",
        hsl: "106,44%,86%",
        cmyk: "10%, 0%, 13%, 8%",
    },
    { hex: "4C3A51", rgb: "", hsl: "", cmyk: "" },
    { hex: "937DC2", rgb: "", hsl: "", cmyk: "" },
    { hex: "FF7396", rgb: "", hsl: "", cmyk: "" },
    { hex: "FFE7BF", rgb: "", hsl: "", cmyk: "" },
    { hex: "000000", rgb: "", hsl: "", cmyk: "" },
    { hex: "377D71", rgb: "", hsl: "", cmyk: "" },
    { hex: "66BFBF", rgb: "", hsl: "", cmyk: "" },
];
