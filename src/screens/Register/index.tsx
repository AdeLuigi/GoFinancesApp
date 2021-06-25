import React, { useState } from 'react';

import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button'
import TransactionTypeButton from '../../components/Forms/TransactionTypeButton';
import CategorySelection from '../../components/Forms/CategorySelection'

import { Container, Header, Title, Form, Fields, TransactionTypes  } from './styles';

const Register: React.FC = () => {

  const [transactionType, setTransactionType] = useState('')

  async function handleTransactionTypeButtonSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome"/>
          <Input placeholder="Preço"/>
          <TransactionTypes>
            <TransactionTypeButton 
              title="Entrada" 
              type="up"
              onPress={() => handleTransactionTypeButtonSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              title="Saída" 
              type="down"
              onPress={() => handleTransactionTypeButtonSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>
          <CategorySelection title="Categoria"/>
        </Fields>
        <Button title="Registrar Transação"/>
      </Form>
    </Container>
  );
}

export default Register;