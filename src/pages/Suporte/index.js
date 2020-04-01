import React from 'react';

import {
  Container,
  PerfilContainer,
  TituloName,
  Titulo,
  AjudaContainer,
  IconContainer,
  AjudaText,
  AjudaDescription,
  Button,
  ButtonText,
  Iconic,
  Iconic1,
  Iconic2,
  IconicHammer,
} from './styles';

export default function Suporte() {
  return (
    <Container>
      <PerfilContainer>
        <Titulo>Suporte</Titulo>
        <TituloName>Como Posso Ajudar?</TituloName>
        <AjudaContainer>
          <IconicHammer name="ios-hammer" size={28} color="#670099" />
          <IconContainer>
            <AjudaText>Minha Internet não funciona</AjudaText>
            <AjudaDescription>Solucionar Problema de conexão</AjudaDescription>
          </IconContainer>
        </AjudaContainer>
      </PerfilContainer>
      <Button>
        <ButtonText>Mapa de cobertura</ButtonText>
        <Iconic name="ios-arrow-forward" size={20} color="#670099" />
      </Button>
      <Button>
        <ButtonText>Como configurar aparelho</ButtonText>
        <Iconic name="ios-arrow-forward" size={20} color="#670099" />
      </Button>
      <Button>
        <ButtonText>Perguntas Frequentes</ButtonText>
        <Iconic name="ios-arrow-forward" size={20} color="#670099" />
      </Button>
    </Container>
  );
}
