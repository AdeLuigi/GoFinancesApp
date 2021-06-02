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
  TransactionList

} from './styles';

const Dashboard: React.FC = () => {
  const data = [{
    title:"Desenvolvimento do site", 
    amount:"R$ 12.000,00",  
    category:{name:'Vendas', icon:'dollar'},
    date:"04/05/2021",
  },
  {
    title:"Desenvolvimento do site", 
    amount:"R$ 12.000,00",  
    category:{name:'Vendas', icon:'dollar'},
    date:"04/05/2021",
  },
  {
    title:"Desenvolvimento do site", 
    amount:"R$ 12.000,00",  
    category:{name:'Vendas', icon:'dollar'},
    date:"04/05/2021",
  },
  {
    title:"Desenvolvimento do site", 
    amount:"R$ 12.000,00",  
    category:{name:'Vendas', icon:'dollar'},
    date:"04/05/2021",
  }]

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
        <TransactionList
          data={data}
          renderItem={({item}) => <TransactionCard data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 16
          }}
        />

      </Transactions>
    </Container>
  );
}

export default Dashboard;