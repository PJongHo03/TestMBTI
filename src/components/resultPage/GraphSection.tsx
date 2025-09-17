import { use, useState, useEffect, useContext } from "react";
import * as S from "./result-page-styled";
import { ContextMBTI } from "../../store/mbti-context";
import { mbti_Info } from "../../data";
import type { MBTI } from "../../data";

export type GraphItem = {
  left: string;
  right: string;
  value: number;
  color: string;
};

const initialGraphs: GraphItem[] = [
  { left: "외향성 (E)", right: "내향성 (I)", value: 0, color: "#6aa6ff" },
  { left: "감각형 (N)", right: "직관형 (S)", value: 0, color: "#6aa6ff" },
  { left: "사고형 (T)", right: "감정형 (F)", value: 0, color: "#6aa6ff" },
  { left: "판단형 (J)", right: "인식형 (P)", value: 0, color: "#6aa6ff" },
];

function Graph({ left, right, value, color }: GraphItem) {
  return (
    <S.GraphGroup>
      <S.GraphSpan>{left}</S.GraphSpan>
      <S.Graph>
        <S.GraphBar value={value} color={color} />
      </S.Graph>
      <S.GraphSpan>{right}</S.GraphSpan>
    </S.GraphGroup>
  );
}

export default function GraphSection() {
  const { mbtiScores, mbtiResult } = useContext(ContextMBTI);
  const [value, setValue] = useState<number[]>(
    initialGraphs.map((g) => g.value)
  );
  const [loading, setLoading] = useState<boolean>(true);

  const [graphs, setGraphs] = useState<GraphItem[]>(initialGraphs);

  const graphColor = mbti_Info[mbtiResult as MBTI].color;
  const sd = Object.values(mbtiScores);

  const dummyData = sd;

  useEffect(() => {
    const id = setTimeout(() => {
      setGraphs((prev) => {
        const next = prev.map((g, i) => ({
          ...g,
          value: dummyData[i],
          color: graphColor,
        }));
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
        <Graph
          left={g.left}
          right={g.right}
          value={value[inedx]}
          color={g.color}
        />
      ))}
    </S.SectionGraph>
  );
}
