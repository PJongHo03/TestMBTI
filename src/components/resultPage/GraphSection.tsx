import * as S from "./result-page-styled";

export type graphProps = {
  left: string;
  right: string;
};

function Graph({ left, right }: graphProps) {
  return (
    <S.GraphGroup>
      <S.GraphSpan>{left}</S.GraphSpan>
      <S.Graph />
      <S.GraphSpan>{right}</S.GraphSpan>
    </S.GraphGroup>
  );
}

export default function GraphSection() {
  return (
    <S.SectionGraph>
      <S.GraphTitle>성격 분석</S.GraphTitle>

      <Graph left="외향성 (E)" right="내향성 (I)" />
      <Graph left="감각형 (N)" right="직관형 (S)" />
      <Graph left="사고형 (T)" right="감정형 (F)" />
      <Graph left="판단형 (J)" right="인식형 (P)" />
    </S.SectionGraph>
  );
}
