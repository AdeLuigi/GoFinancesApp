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

interface CategoryProps {
  name: string;
  icon: string;
}

interface Data {
  data:Props;
}
interface Props {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

const TransactionCard = ({data}:Data) => {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}

export default TransactionCard;