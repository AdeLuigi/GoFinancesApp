import React from 'react';
import { View,Text } from 'react-native';

import {HighlightCard} from '../components/HighlightCard/index';
import TransactionCard, { TransactionCardProps } from '../components/TransactionCard'

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

export interface DataListProps extends TransactionCardProps{
  id:string;
}

const Dashboard: React.FC = () => {
  const data: DataListProps[] = [{
    id:'1',
    type:'positive',
    title:"Desenvolvimento do site", 
    amount:"R$ 12.000,00",  
    category:{name:'Vendas', icon:'dollar-sign'},
    date:"04/05/2021",
  },
  { 
    id:'2',
    type:'negative',
    title:"Hamburgueria Pizzy", 
    amount:"R$ 58,00",  
    category:{name:'Alimentação', icon:'coffee'},
    date:"04/05/2021",
  },
  {
    id:'3',
    type:'negative',
    title:"Aluguel do apartamento", 
    amount:"R$ 1200,00",  
    category:{name:'Casa', icon:'shopping-bag'},
    date:"04/05/2021",
  }
  ]

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
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item}/>}
        />

      </Transactions>
    </Container>
  );
}

export default Dashboard;