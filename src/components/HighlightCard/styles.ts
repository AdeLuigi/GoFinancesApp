import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape} ;

  width: ${RFValue(330)}px;
  margin-right: 16px;
  
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px 23px;
  height: 250px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text_dark};

`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;


`;
export const Footer = styled.View`

`;
export const Amount = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${theme.colors.text_dark};
  margin-top: 38px;
`;
export const LastTransaction = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${theme.colors.text};

`;