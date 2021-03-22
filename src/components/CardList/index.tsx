import React from 'react';
import { 
  CardListTitle,
  CardListTitleContainer,
  CardListContainerInfo,
  CardListSubTitle,
  CardListAmount
} from './style';

interface ICardListProps {
  title?: string;
  subtitle?: string;
  cardcolor?: string;
  tagcolor?: string;
  amount?: string;
}

export const CardList: React.FC<ICardListProps> = ({
  title,
  subtitle,
  cardcolor,
  tagcolor,
  amount
}) => {
  return (
    <>
      {/* <CardListContainer>
        <CardListRecorrentesTitle>Recorrentes</CardListRecorrentesTitle>
        <CardListEventuaisTitle>Eventuais</CardListEventuaisTitle>
      </CardListContainer> */}
      
      <CardListContainerInfo tagcolor={tagcolor}>
        <CardListTitleContainer>
          <CardListTitle>{title}</CardListTitle>
            <CardListSubTitle>{subtitle}</CardListSubTitle>
        </CardListTitleContainer>
        <CardListAmount>{amount}</CardListAmount>
      </CardListContainerInfo>
    </>
  );
}
