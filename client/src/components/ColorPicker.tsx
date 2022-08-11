import styled from "styled-components";

const ColorPickerStyle = styled.div`
    display: flex;
    label,
    input {
        display: block;
    }

    label {
        width: 30%;
    }

    input {
    }

    /* TODO: color picker 스타일 잡기 */
`;

type ColorPickerProps = {
    label: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
};

export default function ColorPicker({ label, setColor }: ColorPickerProps) {
    return (
        <ColorPickerStyle>
            <label>{label}</label>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
        </ColorPickerStyle>
    );
}
