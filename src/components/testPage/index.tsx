import { useParams, useNavigate } from "react-router-dom";
import * as S from "./test-page-styled";
import { useState, useEffect } from "react";
import { mbtiData } from "../../data";

const TestPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const { number } = useParams();
  const navigate = useNavigate();

  const testLength = mbtiData.length;
  useEffect(() => {
    if (number !== undefined) {
      setCurrent(Number(number));
    }
  }, [number]);

  const handleAnswerClick = () => {
    navigate(`/test/${current + 1}`);
  };

  if (current > 20) {
    navigate(`/test/result`);
  }

  return (
    <S.Background>
      <div>
        {current}/{testLength}
      </div>

      <h1>{mbtiData[current].mbtiQuestion}</h1>
      <S.AnswerButton onClick={handleAnswerClick}>네</S.AnswerButton>
      <S.AnswerButton onClick={handleAnswerClick}>아니요</S.AnswerButton>
    </S.Background>
  );
};

export default TestPage;
