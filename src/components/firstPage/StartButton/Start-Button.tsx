import { ArrowRight } from "lucide-react";
import * as S from "./button-styled";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const navigate = useNavigate();

  return (
    <S.StartButton onClick={() => navigate(`/test/0`)}>
      테스트 시작하기 <ArrowRight />
    </S.StartButton>
  );
}
