import styled from "styled-components";
import { ReactNode } from "react";
import { icons } from "lucide-react";

type BrainIconProps = {
  width: number;
  height: number;
  iconSize: number;
  icon: React.ReactNode;
};

type IconBoxProps = {
  iconSize: number;
};

type CircleProps = {
  width: number;
  height: number;
};

export const Circle = styled.div<CircleProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  display: flex;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  background: linear-gradient(to bottom right, #8578f7, #3d9df6);
`;

export const Icon = styled.div<IconBoxProps>`
  svg {
    display: block;
    width: ${(porps) => porps.iconSize}px;
    height: ${(porps) => porps.iconSize}px;
    color: #ffffff;
  }
`;

export default function BrainIcon({
  width,
  height,
  iconSize,
  icon,
}: BrainIconProps) {
  return (
    <Circle width={width} height={height}>
      <Icon iconSize={iconSize}>{icon}</Icon>
    </Circle>
  );
}
