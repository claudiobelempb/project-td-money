import React from 'react';
import { ContainerTable } from './styles';
export function Table() {
  return (
    <>
      <ContainerTable>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td>- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td>R$ 5.400,00</td>
            <td>Venda</td>
            <td>15/03/2021</td>
          </tr>
        </tbody>

        {/* <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
            <td>Footer content 3</td>
          </tr>
        </tfoot> */}
      </ContainerTable>
    </>
  );
}