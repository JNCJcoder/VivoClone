import React from "react";

import {
  Container,
  ContaInfo,
  ThreeDots,
  Preco,
  Vencimento,
  ButtonContainer,
  Button,
  ButtonText,
  WhiteButton,
  WhiteButtonText,
} from "./styles";

const Dots = require("../../assets/three-dots.png");

const ContaDoMes = (props) => {
  return (
    <Container Vencida={props.Vencida}>
      <ContaInfo>
        Sua conta de {props.Mes}
        {props.Vencida ? " está bloqueando a sua linha" : " chegou"}
      </ContaInfo>
      <ThreeDots source={Dots} />
      <Preco Vencida={props.Vencida}>R$ {props.Preco}</Preco>
      <Vencimento>Vence em {props.Vence}</Vencimento>
      <ButtonContainer>
        <Button>
          <ButtonText>Código de barras</ButtonText>
        </Button>
        <WhiteButton>
          <WhiteButtonText>
            {props.Vencida ? "Já Pagou?" : "2° via detalhada"}
          </WhiteButtonText>
        </WhiteButton>
      </ButtonContainer>
    </Container>
  );
};

export default ContaDoMes;
