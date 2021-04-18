import styled from 'styled-components';

interface ITableProps {
  bgColor?: string;
  color?: string;
  borderColor?: string;
}

export const ContainerTable = styled.table<ITableProps>`
  width: 100%;
  margin: 5px 0 2rem 0;
  color: ${props => props.color ? props.color : '#000'};
  border-collapse: collapse;
  background-color: ${props => props.borderColor ? props.borderColor : 'transparent'};
  text-align: left;

  thead {
    background: ${props => props.bgColor ? props.bgColor : 'transparent'};

    & > tr {
      color: ${props => props.color ? props.color : props.theme.colors.black};
      background: ${props => props.bgColor ? props.bgColor : 'transparent'};
      font-weight: 400;
      font-style: normal;
    }

    & > tr > th {
    /* border: 1px solid #000; */
      padding: 0.5em;
      font-weight: 400;
    } 
  }

  tfoot {
    padding: 5px 0px 5px 0px;
  }

  tbody {
    background: ${props => props.bgColor ? props.bgColor : '#FFF'};
    padding: 8px 0px 8px 0px;

    & > tr {
      border-bottom: 1px solid ${props => props.borderColor ? props.borderColor : 'transparent'};

      & > td {
      /* border: 1px solid #000; */
      text-align: left;
      padding: 0.5em;
      margin-bottom: 5px;
      font-weight: 400;
      border-radius: 5px;
    }
  
    & > tr:first-child > td {
      border-top: 2px solid #666;
    }

    & > tr:last-child > td {
      border-bottom: 2px solid #666;
    }

    

    /* Pega as td de uma em uma */

    /* .table-default tbody tr:nth-child(1) td {
            background: red;
        } */

    /* Pega todas td ímpar */
    /* .table-default tbody tr:nth-child(odd) td {
            background: red;
        } */

    /* Pega todas td pares */
    tr:nth-child(even) td {
      background: #eee;
    }
  }

  }

  
  /* TABLE ALTERNATE */
  &--alteration {
    border: 1px solid #ccc;

    tbody tr:first-child td {
      border-top: 1px solid #ccc;

      tr:last-child td {
        border-bottom: 1px solid #ccc;
      }
    }
  }
  
`;