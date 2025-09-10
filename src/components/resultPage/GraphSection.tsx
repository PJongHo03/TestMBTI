import { use, useState, useEffect, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";

export type graphProps = {
  left: string;
  right: string;
  value: number;
};

function Graph({ left, right, value }: graphProps) {
  return (
    <S.GraphGroup>
      <S.GraphSpan>{left}</S.GraphSpan>
      <S.Graph>
        <S.GraphBar value={value} />
      </S.Graph>
      <S.GraphSpan>{right}</S.GraphSpan>
    </S.GraphGroup>
  );
}

export default function GraphSection() {
  const { mbtiScores } = useContext(ContextMBTI);
  const [value, setValue] = useState<number[]>([0, 0, 0, 0]);
  const [loading, setLoading] = useState<boolean>(true);

  const [graphs, setGraphs] = useState([
    { left: "외향성 (E)", right: "내향성 (I)", value: 0 },
    { left: "감각형 (N)", right: "직관형 (S)", value: 0 },
    { left: "사고형 (T)", right: "감정형 (F)", value: 0 },
    { left: "판단형 (J)", right: "인식형 (P)", value: 0 },
  ]);

  const sd = Object.values(mbtiScores);
  const dummyData = [2, 4, 3, 1];

  useEffect(() => {
    const id = setTimeout(() => {
      setGraphs((prev) => {
        const next = prev.map((g, i) => ({ ...g, value: dummyData[i] }));
        setValue(next.map((g) => g.value));
        setLoading(false);
        return next;
      });
    }, 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <S.SectionGraph>
      <S.GraphTitle>성격 분석</S.GraphTitle>
      {graphs.map((g, inedx) => (
        <Graph left={g.left} right={g.right} value={value[inedx]} />
      ))}
    </S.SectionGraph>
  );
}
