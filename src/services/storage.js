import AsyncStorage from '@react-native-community/async-storage';

export const GuardarSessao = async (token) => {
  try {
    await AsyncStorage.setItem('Token_Key', token);
  } catch (e) {
    console.log(e);
  }
};

export const RetornarSessao = async () => {
  try {
    const value = await AsyncStorage.getItem('Token_Key');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

export const GuardarNumero = async (Numero) => {
  try {
    await AsyncStorage.setItem('@Telefone', '' + Numero);
  } catch (e) {}
};

export const RetornarNumero = async () => {
  try {
    const value = await AsyncStorage.getItem('@Telefone');
    if (value !== null) {
      return +value;
    }
  } catch (e) {}
};

export const GuardarNumeroFormatado = async (Numero) => {
  try {
    await AsyncStorage.setItem('@TelefoneFormatado', Numero);
  } catch (e) {}
};

export const RetornarNumeroFormatado = async () => {
  try {
    const value = await AsyncStorage.getItem('@TelefoneFormatado');
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};
