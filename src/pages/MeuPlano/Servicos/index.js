import React from 'react';

import { Header, ItemMenu } from '../../../components';
import { Container } from './styles';

export default function Servicos() {
  return (
    <>
      <Header Numeral={3} />
      <Container>
        <ItemMenu>Detalhe do Plano</ItemMenu>
        <ItemMenu>Troca de Plano</ItemMenu>
        <ItemMenu>Troca de Aparelho</ItemMenu>
        <ItemMenu>Lançamentos Futuros</ItemMenu>
        <ItemMenu>Pacotes</ItemMenu>
        <ItemMenu>Vivo Valoriza</ItemMenu>
        <ItemMenu>Roaming - Vivo Travel</ItemMenu>
        <ItemMenu>Faça uma recarga</ItemMenu>
        <ItemMenu>Meus saldos</ItemMenu>
        <ItemMenu>Vivo App Store</ItemMenu>
      </Container>
    </>
  );
}