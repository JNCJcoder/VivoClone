import React, { useEffect, useState } from "react";
import { TouchableOpacity, Alert } from "react-native";

import {
  PegarNome,
  PegarNumeroFormatado,
  DeletarSessao,
} from "../../services/api";
import {
  Container,
  PerfilContainer,
  PerfilFoto,
  InfoPerfil,
  PerfilNome,
  PerfilNumero,
  ConfigContainer,
  Button,
  ButtonText,
  Iconic,
  FirstIconic,
  LastIconic,
  ConfigTitulo,
  Versao,
} from "./styles";

const FotoPerfil = require("../../assets/user.png");

export default function Perfil({ navigation }) {
  const [Numero, setNumero] = useState("");
  const [Nome, setNome] = useState("");

  useEffect(() => {
    GetPerfil();
  });

  const GetPerfil = async () => {
    setNumero(await PegarNumeroFormatado());
    setNome(await PegarNome());
  };

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ right: 15 }}
        onPress={() => alertarSaida()}
      >
        <Iconic name="ios-log-out" size={30} color="white" />
      </TouchableOpacity>
    ),
  });

  const alertarSaida = () => {
    Alert.alert(
      "Tem certeza que deseja sair?",
      "Se você sair o login, você tera que começar novamente na proxima vez.",
      [
        {
          text: "NÃO SAIR",
        },
        {
          text: "SAIR",
          onPress: () => {
            DeletarSessao();
            navigation.navigate("Inicio");
          },
          style: "cancel",
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <PerfilContainer>
        <PerfilFoto source={FotoPerfil} />
        <InfoPerfil>
          <PerfilNome>{Nome}</PerfilNome>
          <PerfilNumero>{Numero}</PerfilNumero>
        </InfoPerfil>
      </PerfilContainer>
      <ConfigContainer>
        <ConfigTitulo>Minha Informação</ConfigTitulo>
        <Button>
          <FirstIconic name="ios-star-outline" size={25} />
          <ButtonText>Vivo Valoriza</ButtonText>
          <LastIconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <FirstIconic name="ios-notifications-outline" size={25} />
          <ButtonText>Notificações</ButtonText>
          <LastIconic name="ios-arrow-forward" size={20} />
        </Button>
      </ConfigContainer>
      <ConfigContainer>
        <ConfigTitulo>Ajustes</ConfigTitulo>
        <Button>
          <FirstIconic name="ios-unlock" size={25} />
          <ButtonText>Segurança e Privacidade</ButtonText>
          <LastIconic name="ios-arrow-forward" size={20} />
        </Button>
      </ConfigContainer>
      <Versao>Versão: 1.0.0</Versao>
    </Container>
  );
}
