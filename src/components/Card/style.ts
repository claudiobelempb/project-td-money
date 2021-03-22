import styled from 'styled-components';

interface ICardProps {
  bgColor?: string;
}

export const CardContainer = styled.article<ICardProps>`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.white };
  margin-top: 20px;
  padding: 20px 0;
  margin-right: 10px;
  position: relative;
  right: 0;
  left: 0;
  top: -97px;
  border-radius: 0.25rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardTitle = styled.h1``;