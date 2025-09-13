import { css } from "styled-components";
import styled from "styled-components";

export const Background = styled.div`
  background-color: #ffffff;
  width: 1000px;
  height: 500px;
  display: flex;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  flex-direction: column;
`;

export const Section = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const SectionGraph = styled.div`
  background-color: #ffffff;
  width: 450px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
`;

export const ResultSection = styled.div`
  width: 400px;
  height: 100px;
  margin-left: 50px;
  margin-right: 64px;
  display: flex;
  align-items: center; // 세로 가운데

  flex-direction: column;
`;

export const ResultSpan = styled.div`
  display: flex;
  justify-content: center; // 가로 가운데
  gap: 28px;
`;
type props = {
  color: string;
};

export const ResultCode = styled.div<props>`
  background-color: ${({ color }) => color};
  font-size: 32px;
  color: #ffffff;
  width: 200px;
  height: 60px;
  display: flex;
  text-align: center;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  border-radius: 10px;
  margin-bottom: 12px;
`;
export const ResultTitle = styled.div<props>`
  font-size: 40px;
  color: ${({ color }) => color};
  font-weight: bold;
`;

export const ResultMessage = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #000000;
`;

export const ReplayButton = styled.button`
  font-size: 32px;
  color: #ffffff;
  width: 180px;
  height: 50px;
  margin-top: 28px;
  text-align: center;
  border: none;
  font-weight: bold;
  background: linear-gradient(to right, #8578f7, #3d9df6);
  border-radius: 10px;
`;

export const BestMbti = styled.div`
  font-size: 24px;
  margin-top: 20px;
  color: #878787;
`;
export const WorstMbti = styled.div`
  font-size: 24px;
  margin-top: 12px;
  color: #878787;
`;

export const Graph = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  width: 252px;
  background-color: #eee;
  position: relative;
  overflow: hidden;
  height: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

type graphProps = {
  value: number;
  color: string;
};

export const GraphBar = styled.div<graphProps>`
  position: absolute;
  background-color: ${({ color }) => color};
  transition: width 1s ease;
  height: 100%;

  ${({ value }) => {
    const v = Math.max(-4, Math.min(4, value));

    const widthPct = (Math.abs(v) / 4) * 50;
    return v < 0
      ? css`
          right: 50%;
          width: ${widthPct}%;
        `
      : css`
          left: 50%;
          width: ${widthPct}%;
        `;
  }};
`;

export const GraphSpan = styled.span`
  //조건 추가해서 왼쪽 오른쪽 입력값 분리 margin
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
`;

export const GraphTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 50px;
  font-weight: bold;
`;

export const GraphGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
`;
