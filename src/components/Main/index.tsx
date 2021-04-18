import React from 'react';

import { Container } from './style';


export const Main: React.FC = ({children}) => {
  return (
    <Container>
        {children}
    </Container>
  );
}