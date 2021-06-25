import React from 'react';
import { View } from 'react-native';

import { 
  Container,
  Category,
  Icon,
} from './styles';

interface Props {
  title: string;
}
 

const CategorySelection: React.FC<Props> = ({ title }:Props) => {
  return (
    <Container>
    <Category>{title}</Category>
    <Icon name="chevron-down"/>
    </Container>
  );
}

export default CategorySelection;