import React from 'react';

import {
  Container,
  PerfilContainer,
  ImagemAnuncio,
  Titulo,
  AnuncioTag,
  AnuncioTitulo,
  AnuncioDescription,
  OfertasTitulo,
  OfertasContainer,
  Ofertas,
  AdsContainer,
  ShopAds,
  FlexAds,
  FlexText,
  NameAds,
  DescriptionAds,
  ValueAds,
  TrialAds,
} from './styles';

export default function Descubra() {
  return (
    <Container>
      <PerfilContainer>
        <Titulo>Descubra</Titulo>
        <ImagemAnuncio />
      </PerfilContainer>
      <AnuncioTag>SEMANA DO CONSUMIDOR</AnuncioTag>
      <AnuncioTitulo>Aproveite que é só uma semana</AnuncioTitulo>
      <AnuncioDescription>
        Oferta Imperdivel do Galaxy AAA por 12x de R$ 75,00 sem juros e com
        frete gratis ate 16/03.
      </AnuncioDescription>
      <OfertasTitulo>Ofertas da Semana</OfertasTitulo>
      <OfertasContainer
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}>
        <Ofertas />
        <Ofertas />
      </OfertasContainer>
      <AdsContainer />
      <OfertasTitulo>Apps Sugeridos</OfertasTitulo>
      <FlexAds>
        <ShopAds />
        <FlexText>
          <TrialAds>07 DIAS GRATIS</TrialAds>
          <NameAds>Globo Play</NameAds>
          <DescriptionAds>Novelas e series da globo</DescriptionAds>
          <ValueAds>R$ 21,90</ValueAds>
        </FlexText>
      </FlexAds>
      <FlexAds>
        <ShopAds />
        <FlexText>
          <TrialAds>30 DIAS GRATIS</TrialAds>
          <NameAds>Telecine</NameAds>
          <DescriptionAds>O Melhor do cinema onde estiver</DescriptionAds>
          <ValueAds>R$ 37,90</ValueAds>
        </FlexText>
      </FlexAds>
      <FlexAds>
        <ShopAds />
        <FlexText>
          <TrialAds>30 DIAS GRATIS</TrialAds>
          <NameAds>Amazon Prime Video</NameAds>
          <DescriptionAds>Filmes e series</DescriptionAds>
          <ValueAds>R$ 7,90</ValueAds>
        </FlexText>
      </FlexAds>
    </Container>
  );
}
