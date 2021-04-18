import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 1080px){
    flex-direction: row;
  }


`;