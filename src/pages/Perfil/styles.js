import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

import Color from '../../config/Theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${Color.background};
`;

export const Atualizado = styled.Text`
  margin-left: 38%;
  margin-top: 4%;
  font-size: 12px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

export const PerfilContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background-color: ${Color.primary};
`;

export const InfoPerfil = styled.View`
  margin-top: 10px;
`;
export const PerfilNome = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 19px;
  font-weight: bold;
  color: ${Color.secondary};
  align-self: center;
`;

export const PerfilNumero = styled(PerfilNome)`
  margin-top: 0px;
  font-size: 17px;
  font-weight: normal;
`;

export const PerfilFoto = styled.Image`
  margin-top: 10px;
  margin-left: 20px;
  width: 70px;
  height: 70px;
`;

export const Button = styled.TouchableOpacity`
  border-bottom-width: 0.2px;
  border-color: grey;
  border-style: solid;
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  margin-left: 58px;
  margin-bottom: 15px;
  color: #000;
  align-self: flex-start;
  margin-top: 15px;
`;

export const ConfigContainer = styled(PerfilContainer)`
  left: 0px;
  top: 0px;
  height: 100%;
  margin-left: 0px;
  margin-bottom: 10px;
  background-color: ${Color.secondary};
  color: grey;
  flex-direction: column;
`;

export const ConfigTitulo = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 19px;
  font-weight: bold;
  color: grey;
  align-self: flex-start;
`;

export const Versao = styled.Text`
  margin-top: 10px;
  margin-bottom: 20px;
  align-self: center;
`;

export const Iconic = styled(Icon)``;

export const FirstIconic = styled(Icon)`
  position: absolute;
  margin-top: 12px;
  margin-left: 5%;
`;

export const LastIconic = styled(FirstIconic)`
  margin-top: 20px;
  margin-left: 93%;
`;
