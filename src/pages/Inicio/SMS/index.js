import React, { useState, useEffect } from "react";
import { Keyboard, Alert } from "react-native";

import { PegarToken, GerarSessao } from "../../../services/api";
import { Container, Description, Telefone } from "./styles";

export default function SMS({ navigation }) {
  const [token, setToken] = useState("");
  const [tokenUnmasked, setTokenUnmasked] = useState("");
  const ContaToken = PegarToken();

  navigation.setOptions({
    headerLeft: null,
  });

  useEffect(() => {
    if (tokenUnmasked.length === 5) {
      Verificar();
    }
  }, [tokenUnmasked]);

  const Verificar = async () => {
    // Chama API e Verifica Existencia do Numero
    // Caso sim, Joga para tela de SMS
    if (tokenUnmasked === ContaToken) {
      await GerarSessao();
      Keyboard.dismiss();
      setToken("");
      navigation.navigate("Ola");
    } else {
      Alert.alert("Numero Invalido");
      setToken("");
    }
  };

  return (
    <>
      <Container>
        <Description>Confirme o codigo enviado por SMS.</Description>
        <Telefone
          mask={"[0]  [0]  [0]  [0]  [0]"}
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          keyboardType="phone-pad"
          value={token}
          onChangeText={(formatted, extracted) => {
            setToken(formatted);
            setTokenUnmasked(extracted);
          }}
          onSubmitEditing={Verificar}
        />
      </Container>
    </>
  );
}
