import React from 'react';

import { ItemMenu } from '../../../components';
import { Container } from './styles';

export default function Servicos() {
  return (
    <>
      <Container showsVerticalScrollIndicator={false}>
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
