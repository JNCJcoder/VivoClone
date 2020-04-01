import React, { useState, useEffect } from 'react';
import { Keyboard, Alert } from 'react-native';

import {
  AtualizarNumero,
  AtualizarNumeroFormatado,
} from '../../../services/api';
import {
  Container,
  IconButton,
  Iconic,
  Description,
  Telefone,
  ButtonContainer,
  ButtonText,
  Button,
} from './styles';

export default function Login({ navigation }) {
  const [telefone, setTelefone] = useState('');
  const [telefoneUnmasked, setTelefoneUnmasked] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [Focusing, setFocusing] = useState(false);

  navigation.setOptions({
    headerLeft: () => (
      <IconButton onPress={() => alertarSaida()}>
        <Iconic name="md-arrow-back" size={30} />
      </IconButton>
    ),
  });

  const Verificar = () => {
    if (telefoneUnmasked.length === 11) {
      Keyboard.dismiss();
      AtualizarNumero(telefoneUnmasked);
      AtualizarNumeroFormatado(telefone);
      setTelefone('');
      navigation.navigate('SMS');
    } else {
      Alert.alert('Numero Invalido');
    }
  };

  const alertarSaida = () => {
    Alert.alert(
      'Tem certeza que deseja sair?',
      'Se você sair o login, você tera que começar novamente na proxima vez.',
      [
        {
          text: 'NÃO SAIR',
        },
        {
          text: 'SAIR',
          onPress: () => navigation.goBack(),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  useEffect(() => {
    if (telefoneUnmasked.length < 11) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [telefoneUnmasked]);

  return (
    <>
      <Container>
        <Description>Faça login com seu numero de telefone</Description>
        <Telefone
          mask={'([00]) [0] [0000]-[0000]'}
          placeholder="Entre com seu DDD + Celular Vivo"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="send"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={(formatted, extracted) => {
            setTelefone(formatted);
            setTelefoneUnmasked(extracted);
          }}
          onSubmitEditing={Verificar}
          onFocus={() => setFocusing(true)}
          Focus={Focusing}
        />
        <ButtonContainer>
          <Button onPress={Verificar} disabled={buttonDisabled}>
            <ButtonText>C O N T I N U A R</ButtonText>
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
