import React, { useEffect } from "react";

import { RetornarSessao } from "../../../services/api";
import {
  Container,
  InicialContainer,
  Logo,
  InfoContainer,
  InfoItem,
  Titulo,
  Description,
  Button,
  ButtonText,
  TermosContainer,
  TermosLink,
  Termos,
} from "./styles";

const VivoLogo = require("../../../assets/vivo-logo-1.png");

export default function Inicio({ navigation: { navigate } }) {
  useEffect(() => {
    GetSession();
  }, []);

  const GetSession = async () => {
    const Session = RetornarSessao();
    if (Session === "1") {
      navigate("Rota");
    }
  };

  return (
    <Container>
      <InicialContainer>
        <Logo source={VivoLogo} resizeMode="stretch" />
        <InfoContainer
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={200}
          decelerationRate="fast"
          contentContainerStyle={{ alignitems: "center" }}
        >
          <InfoItem>
            <Titulo>Viva mais no seu tempo com a Vivo</Titulo>
            <Description>
              Gerencie seu plano de celular sem filas ou esperas telefônicas
            </Description>
          </InfoItem>
          <InfoItem>
            <Titulo>Acompanhe seu plano e serviços</Titulo>
            <Description>
              Veja seu consumo de internet, acesse a 2° via de conta ou consulte
              seu saldo e extrato
            </Description>
          </InfoItem>
          <InfoItem>
            <Titulo>Aura, a inteligencia artificial da Vivo</Titulo>
            <Description>Use o comando de voz para tirar duvidas</Description>
          </InfoItem>
        </InfoContainer>
        <Button onPress={() => navigate("Login")}>
          <ButtonText>Começar Agora</ButtonText>
        </Button>
        <TermosContainer>
          <Termos>Ao continuar, você aceita nossos</Termos>
          <TermosLink onPress={() => navigate("TOS")}>
            <Termos>Termos e Condições</Termos>
          </TermosLink>
        </TermosContainer>
      </InicialContainer>
    </Container>
  );
}
