import { ArrowRight } from "lucide-react";
import * as S from "./button-styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StartButton() {
  const [current, setCurrent] = useState(1);
  const { number } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (number !== undefined) {
      setCurrent(Number(number));
    }
  }, [number]);

  const handleAnswerClick = () => {
    navigate(`/test/${current + 1}`);
  };

  return (
    <S.StartButton onClick={() => navigate(`/test/${current}`)}>
      테스트 시작하기 <ArrowRight />
    </S.StartButton>
  );
}
