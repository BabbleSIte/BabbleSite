import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { backgroundList, ColorType } from "../theme";
import { NewPaperWrapper } from "../style/pageStyle/NewPaperStyle";

export default function NewPaper() {
    const [newPaper, setNwePaper] = useState<{
        title: string;
        uuid: string;
        theme: string[];
    }>({ title: "", uuid: "", theme: [""] });
    const navigate = useNavigate();

    async function getTheme(color: ColorType) {
        try {
            await axios
                .get(
                    `https://www.thecolorapi.com/scheme?hex=${color.hex}&rgb=${color.rgb}&hsl=${color.hsl},&cmyk=${color.hsl}&format=json&mode=analogic&count=6`
                )
                .then((res) => {
                    if (res.status === 200) {
                        let colorArr: string[] = res.data.colors.map(
                            (color: any) => {
                                return color.hex.value;
                            }
                        );
                        return setNwePaper({ ...newPaper, theme: colorArr });
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                let r = (Math.random() * 16) | 0,
                    v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }

    function postPaper() {
        let newId = uuid();
        console.log(newPaper);
        // try {
        // 	axios.post("", { data: { ...newPaper, uuid: newId, theme:  } }).then(res => {
        // 		if (res.status === 200) {
        // 			navigate("/paper/" + newId);
        // 		}
        // 	});
        // } catch (err) {
        // 	alert("");
        // }
        console.log(newId);
        navigate("/paper");
    }

    return (
        <>
            <Header title="새로운 페이퍼 만들기" />
            <NewPaperWrapper>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="paper-title-input">페이퍼 제목</label>
                    <input
                        value={newPaper.title}
                        id="paper-title-input"
                        placeholder="제목을 입력해주세요"
                        onChange={(e) =>
                            setNwePaper({
                                ...newPaper,
                                title: e.target.value,
                            })
                        }
                    />
                </form>
                <div className="theme-section">
                    <h3>테마 선택</h3>
                    <ul>
                        {backgroundList.map((list: ColorType) => {
                            return (
                                <li
                                    key={"#" + list.hex}
                                    className="themeColor"
                                    onClick={() => getTheme(list)}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#" + list.hex,
                                        }}
                                    ></div>
                                    <span>#{list.hex}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button className="create-paper-btn" onClick={postPaper}>
                    paper 생성하기
                </button>
            </NewPaperWrapper>
        </>
    );
}
