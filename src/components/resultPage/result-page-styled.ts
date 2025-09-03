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
  margin-left: 51%;
  background-color: #ffffff;
  display: flex;
  width: 450px;
  height: 380px;
  justify-content: center; // 가로 가운데
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
