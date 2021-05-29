import React from 'react';
import { View,Text } from 'react-native';


 import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon

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
    </Container>
  );
}

export default Dashboard;