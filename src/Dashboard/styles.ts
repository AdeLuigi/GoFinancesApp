import styled from 'styled-components/native';
import theme from '../global/styles/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`

  flex: 1;
  background-color: ${({theme}) => theme.colors.background} ;
`

export const Header = styled.View`
  width: 100%;
  background-color:${theme.colors.primary};
  height: ${RFPercentage(42)}px;
  align-items: center;
  justify-content: flex-start;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;
export const Photo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 4px;
`;
export const User = styled.View`
  margin-left: 17px;


`;
export const UserGreeting = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};

`;
export const Icon = styled(Feather)`
  color: ${theme.colors.secundary};
  font-size: ${RFValue(24)}px;
`;
export const HighlightCards = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator:false,
  contentContainerStyle:{paddingHorizontal:24}
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;