import { useParams, useNavigate } from "react-router-dom";
import * as S from "./test-page-styled";
import { useState, useEffect, useContext } from "react";
import { mbtiData } from "../../data";
import { ContextMBTI } from "../../store/mbti-context";

import BrainIcon from "../../icon/BrainIcon";
import { Brain } from "lucide-react";
const TestPage: React.FC = () => {
  const { checkedMBTI, handleCheck } = useContext(ContextMBTI);
  const [current, setCurrent] = useState<number>(0);
  const { number } = useParams();
  const navigate = useNavigate();

  const q = mbtiData[current];

  const testLength = mbtiData.length;

  useEffect(() => {
    if (number !== undefined) {
      setCurrent(Number(number));
    }
    console.log("현재값" + current);
  }, [number, current, navigate]);

  const handleAnswerClick = (value: string) => {
    handleCheck(value);

    if (current >= 20) {
      navigate(`/test/result`);
    } else {
      navigate(`/test/${current + 1}`);
    }
  };

  return (
    <S.Background>
      <S.Header>
        <BrainIcon width={65} height={65} iconSize={35} icon={<Brain />} />
        {current + 1}/{testLength}
      </S.Header>
      <S.Question>{q.mbtiQuestion}</S.Question>
      <S.AnswerButton onClick={() => handleAnswerClick(q.yes)}>
        네
      </S.AnswerButton>
      <S.AnswerButton onClick={() => handleAnswerClick(q.no)}>
        아니요
      </S.AnswerButton>
    </S.Background>
  );
};

export default TestPage;
