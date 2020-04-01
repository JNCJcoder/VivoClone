import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  ItemMenu,
  ItemName,
  ItemMenuSelected,
  ItemNameSelected,
} from './styles';

export default function Header({ Numeral }) {
  const { navigate } = useNavigation();
  return (
    <Container>
      {Numeral === 1 ? (
        <ItemMenuSelected disabled>
          <ItemNameSelected>CONSUMO</ItemNameSelected>
        </ItemMenuSelected>
      ) : (
        <ItemMenu onPress={() => navigate('Consumo')}>
          <ItemName>CONSUMO</ItemName>
        </ItemMenu>
      )}
      {Numeral === 2 ? (
        <ItemMenuSelected disabled>
          <ItemNameSelected>{'  '}CONTA</ItemNameSelected>
        </ItemMenuSelected>
      ) : (
        <ItemMenu onPress={() => navigate('Conta')}>
          <ItemName>{'  '}CONTA</ItemName>
        </ItemMenu>
      )}
      {Numeral === 3 ? (
        <ItemMenuSelected disabled>
          <ItemNameSelected>SERVIÇOS</ItemNameSelected>
        </ItemMenuSelected>
      ) : (
        <ItemMenu onPress={() => navigate('Servicos')}>
          <ItemName>SERVIÇOS</ItemName>
        </ItemMenu>
      )}
    </Container>
  );
}
