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
export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const SectionGraph = styled.div`
  background-color: #ffffff;
  width: 450px;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center; // 가로 가운데
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
  font-size: 32px;
  color: ${({ color }) => color};
  font-weight: bold;
`;

export const ResultMessage = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #878787;
`;
export const ResultButton = styled.button``;
