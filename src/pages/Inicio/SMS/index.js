import React, { useState } from 'react';
import { Keyboard, Alert } from 'react-native';

import { PegarToken, GerarSessao } from '../../../services/api';
import { Container, Description, Telefone } from './styles';

export default function SMS({ navigation }) {
  const [token, setToken] = useState('');
  const [tokenUnmasked, setTokenUnmasked] = useState('');
  const ContaToken = PegarToken();

  navigation.setOptions({
    headerLeft: null,
  });

  const Verificar = async () => {
    // Chama API e Verifica Existencia do Numero
    // Caso sim, Joga para tela de SMS
    if (tokenUnmasked === ContaToken) {
      await GerarSessao();
      Keyboard.dismiss();
      setToken('');
      navigation.navigate('Rota');
    } else {
      Alert.alert('Numero Invalido');
      setToken('');
    }
  };

  return (
    <>
      <Container>
        <Description>Confirme o codigo enviado por SMS.</Description>
        <Telefone
          mask={'[0]  [0]  [0]  [0]  [0]'}
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          keyboardType="phone-pad"
          value={token}
          onChangeText={(formatted, extracted) => {
            setToken(formatted);
            setTokenUnmasked(extracted);
            if (extracted.length === 5 && tokenUnmasked.length === 5) {
              Verificar();
            }
          }}
          onSubmitEditing={Verificar}
        />
      </Container>
    </>
  );
}
