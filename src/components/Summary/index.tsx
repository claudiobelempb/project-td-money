import { Container } from './styles';

import { Card } from '../Card';

export function Summary() {
  return(
    <Container>
      <Card />
      <Card />
      <Card bgColor={'#33CC95'}/>
    </ Container>
  );
}