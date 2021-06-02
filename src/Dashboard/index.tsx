import React from 'react';
import { View,Text } from 'react-native';

import {HighlightCard} from '../components/HighlightCard/index';
import TransactionCard from '../components/TransactionCard'

 import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,

} from './styles';

const Dashboard: React.FC = () => {
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{uri:'https://avatars.githubusercontent.com/u/44641613?v=4'}} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Ademaru</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up" 
          title="Entradas" 
          amount="18.400,00" 
          lasTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Entradas" 
          amount="18.400,00" 
          lasTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Entradas" 
          amount="18.400,00" 
          lasTransaction="Última entrada dia 13 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionCard/>
      </Transactions>
    </Container>
  );
}

export default Dashboard;