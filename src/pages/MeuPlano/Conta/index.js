import React from 'react';

import { Header } from '../../../components';
import { PegarConta } from '../../../services/api';
import {
  Container,
  Titulo,
  PlanoID,
  ContaContainer,
  ContaContainerRed,
  ContaInfo,
  ThreeDots,
  ContaPreco,
  ContaPrecoRed,
  ContaVence,
  ButtonContainer,
  Button,
  WhiteButton,
  ButtonText,
  WhiteButtonText,
} from './styles';

const Dots = require('../../../assets/three-dots.png');

export default function Conta() {
  const Contas = PegarConta();

  return (
    <>
      <Header Numeral={2} />
      <Container>
        <Titulo>2° via de contas</Titulo>
        <PlanoID>{Contas.nome}</PlanoID>
        <ContaContainer>
          <ContaInfo>Sua conta de fevereiro chegou</ContaInfo>
          <ThreeDots source={Dots} />
          <ContaPreco>R$ {Contas.preco}</ContaPreco>
          <ContaVence>Vence em {Contas.vence}</ContaVence>
          <ButtonContainer>
            <Button>
              <ButtonText>Código de barras</ButtonText>
            </Button>
            <WhiteButton>
              <WhiteButtonText>2° via detalhada</WhiteButtonText>
            </WhiteButton>
          </ButtonContainer>
        </ContaContainer>
        <ContaContainerRed>
          <ContaInfo>
            Sua conta de Janeiro está bloqueando a sua linha
          </ContaInfo>
          <ThreeDots source={Dots} />
          <ContaPrecoRed>R$ 68,33</ContaPrecoRed>
          <ContaVence>Vence em 10/02/2020</ContaVence>
          <ButtonContainer>
            <Button>
              <ButtonText>Código de barras</ButtonText>
            </Button>
            <WhiteButton>
              <WhiteButtonText>Já Pagou?</WhiteButtonText>
            </WhiteButton>
          </ButtonContainer>
        </ContaContainerRed>
      </Container>
    </>
  );
}
