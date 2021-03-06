import styled from 'styled-components';

interface ITitleProps {
  color?: string;
  bgcolor?: string;
  isColor?: boolean;
  isBgColor?: boolean;
}

export const TitleContainer = styled.h1<ITitleProps>`
  color: ${props => props.isColor ? props.color : props.theme.colors.white};
  font-size: 36px;
  font-weight: bold;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 8px;
    background-color: ${props => props.isBgColor ? props.bgcolor : props.theme.colors.info};
  }
`;