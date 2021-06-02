import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,

} from './styles';

const TransactionCard: React.FC = () => {
  return (
    <Container>
      <Title>Desenvolvimendo do App</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>

    </Container>
  )
}

export default TransactionCard;