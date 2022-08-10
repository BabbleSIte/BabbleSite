// interface ColorType {
//     XYZ: {x: number, y: number, z: number, fraction: {x: number, y: number, z: number}, value: string},
// cmyk: {fraction: {…}, value: 'cmyk(7, 26, 0, 71)', c: 7, m: 26, y: 0, …}
// contrast: {value: '#ffffff'}
// hex: {value: '#443649', clean: '443649'}
// hsl: {fraction: {…}, h: 284, s: 15, l: 25, value: 'hsl(284, 15%, 25%)'}
// hsv: {fraction: {…}, value: 'hsv(284, 26%, 29%)', h: 284, s: 26, v: 29}
// image: {bare: 'https://www.thecolorapi.com/id?format=svg&named=false&hex=443649', named: 'https://www.thecolorapi.com/id?format=svg&hex=443649'}
// name: {value: 'Mortar', closest_named_hex: '#504351', exact_match_name: false, distance: 1097}
// rgb: {fraction: {…}, r: 68, g: 54, b: 73, value: 'rgb(68, 54, 73)'}
// _embedded: {}
// _links: {self: {…}}
// }

export interface ColorType {
    hex: string;
    rgb: string;
    hsl: string;
    cmyk: string;
}

// export type Theme = {

// }

// export const theme:Theme[] = [
//   {
//     background:
//   }
// ]

export const backgroundList: ColorType[] = [
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
