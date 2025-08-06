import styled from "styled-components";

export const CardBackGround = styled.div<{ bgColor: string }>`
  width: 200px;
  height: 120px;
  background-color: ${({ bgColor }) => bgColor};
  color: #ffffff;
  border-radius: 10px;
  justify-content: center; // 가로 가운데
  flex-direction: column;
  align-items: center; // 세로 가운데
  display: flex;

  &:hover {
    opacity: 0.92;
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }
`;

export const Icon = styled.div<{ iconColor: string }>`
  svg {
    width: 40px;
    height: 40px;
    color: ${({ iconColor }) => iconColor};
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center; // 가로 가운데
  flex-direction: row;
  align-items: center; // 세로 가운데
  gap: 32px;
`;
