import * as S from "./first-page.styles";
import CardGroup from "./Card/Card-Group";
import { ArrowRight } from "lucide-react";

import BrainIcon from "../../icon/BrainIcon";
import { Brain } from "lucide-react";
import LoadingAni from "../loading";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FirstPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickButton = () => {
    setLoading(true);

    setTimeout(() => {
      navigate(`/test/0`);
    }, 3000);
  };

  if (loading) return <LoadingAni />;

  return (
    <S.Background>
      <S.Header>
        <BrainIcon width={80} height={80} iconSize={45} icon={<Brain />} />
        <S.Title>간단한 MBTI 테스트</S.Title>
        <S.SubTitle>20개의 질문으로 당신의 성격 유형을 알아보세요</S.SubTitle>
      </S.Header>

      <S.Section>
        <CardGroup />
      </S.Section>

      <S.StartButton onClick={handleClickButton}>
        테스트 시작하기 <ArrowRight />
      </S.StartButton>
    </S.Background>
  );
}
