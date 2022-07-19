import styled from "styled-components";
import Header from "../components/Header";
import { PageWrapper } from "../styledComponents";
// import axios from "axios";
// 서버랑 연결해서 디비에서 uuid에 맞는 페이퍼에 대한 정보 불러오기. (theme, memolist 등)

const PaperWrap = styled(PageWrapper)`
    padding: 5rem;
    display: flex;
    justify-content: space-evenly;

    :nth-child(2n) {
        transform: rotate(10deg);
    }

    :nth-child(2n + 1),
    :first-child {
        transform: rotate(-10deg);
    }
`;

const MemoStyle = styled.div<{ prop: memoInfo }>`
    width: 10rem;
    height: 12rem;
    background: ${(prop) => prop.prop.background};
    color: ${(prop) => prop.prop.color};
    text-align: ${(prop) => prop.prop.textAlign};
    padding: 15px;
`;

type memoInfo = {
    id: number;
    message: string;
    from: string;
    background: string;
    color: string;
    textAlign: string;
};

const paperList: memoInfo[] = [
    {
        id: 0,
        message: "추카추카",
        from: "은빈",
        background: "#cde35e",
        color: "#fff",
        textAlign: "left",
    },
    {
        id: 1,
        message: "추카추카dd",
        from: "은빈dd",
        background: "#7aaafd",
        color: "#fff",
        textAlign: "left",
    },
    {
        id: 2,
        message: "추카추카",
        from: "은빈",
        background: "#ffe991",
        color: "#787676",
        textAlign: "left",
    },
    {
        id: 3,
        message: "추카추카",
        from: "은빈",
        background: "#ffe991",
        color: "#787676",
        textAlign: "left",
    },
];

export default function Paper() {
    return (
        <>
            <Header title="paper title" />
            <PaperWrap>
                {paperList.map((li) => {
                    return (
                        <div key={li.message}>
                            <MemoStyle prop={li}>
                                {li.message}
                                <span>{li.from}</span>
                            </MemoStyle>
                        </div>
                    );
                })}
            </PaperWrap>
        </>
    );
}
