import React from 'react';
import { CardContainer, CardTitle } from './style';

interface ICardProps {
  bgColor?: string;
}
export function Card({ bgColor }: ICardProps) {
  return (
    <CardContainer bgColor={bgColor}>
      <CardTitle>saldo</CardTitle>
    </CardContainer>
  );
}
