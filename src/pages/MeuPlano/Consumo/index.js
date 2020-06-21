import React from "react";

import { Header } from "../../../components";
import { PegarPlano } from "../../../services/api";
import {
  Container,
  PlanoContainer,
  PlanoNome,
  MinMaxContainer,
  MinUso,
  MaxUso,
  BarraDeUso,
  Renova,
  Atualizado,
  Button,
  ButtonText,
  PurpleSquare,
  ShareContainer,
  ShareNome,
  ShareItem,
  ShareText,
  DetailContainer,
  DetailItem,
  DetailText,
  Barrinha,
  CircleBar,
  CircleBarBlue,
  Iconic,
} from "./styles";

export default function Consumo() {
  const Plano = PegarPlano();

  return (
    <>
      <Header Numeral={1} />
      <Container showsVerticalScrollIndicator={false}>
        <Atualizado>Atualizado em 06/03/2020 as 20:05</Atualizado>
        <PlanoContainer>
          <PlanoNome>{Plano.nome}</PlanoNome>
          <MinMaxContainer>
            <MinUso>0GB</MinUso>
            <MaxUso>4,5GB</MaxUso>
          </MinMaxContainer>
          <BarraDeUso />
          <Renova>Renova em 26/03</Renova>
          <Barrinha />
          <MinMaxContainer>
            <CircleBarBlue />
            <Renova>
              Consumo{"            "} 0% {"             "} 0GB
            </Renova>
          </MinMaxContainer>
          <Barrinha />
          <MinMaxContainer>
            <CircleBar />
            <Renova>
              Disponivel{"         "} 100% {"        "} 4,5GB
            </Renova>
          </MinMaxContainer>
        </PlanoContainer>
        <DetailContainer>
          <DetailItem>
            <DetailText>Detalhes do consumo de minha internet</DetailText>
            <Iconic name="ios-arrow-forward" size={20} color="#670099" />
          </DetailItem>
        </DetailContainer>
        <DetailContainer>
          <PurpleSquare />
          <DetailItem>
            <DetailText>Mude para Vivo Pós</DetailText>
            <Iconic name="ios-arrow-forward" size={20} color="#670099" />
          </DetailItem>
        </DetailContainer>
        <Button>
          <ButtonText>Contrate um Pacote Adicional</ButtonText>
        </Button>
        <ShareContainer>
          <ShareNome>Compartilhe Internet</ShareNome>
          <ShareItem>
            <ShareText>Envie sua internet disponivel</ShareText>
            <Iconic name="ios-arrow-forward" size={20} color="#670099" />
          </ShareItem>
          <ShareItem>
            <ShareText>Peça internet aos seus amigos</ShareText>
            <Iconic name="ios-arrow-forward" size={20} color="#670099" />
          </ShareItem>
        </ShareContainer>
      </Container>
    </>
  );
}
