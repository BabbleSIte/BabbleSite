import Header from "../components/Header";

export default function NewPaper() {
  return (
    <div>
      <Header title="새로운 페이퍼 만들기" />
      <div>
        <label>
          페이퍼 제목
          <input />
        </label>
      </div>
    </div>
  );
}
