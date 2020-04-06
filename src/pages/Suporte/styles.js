import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

import Color from '../../config/Theme';
export const Container = styled.ScrollView`
  flex: 1;
  background: ${Color.background};
`;

export const PerfilContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 190px;
  background-color: ${Color.primary};
  margin-bottom: 50px;
`;

export const Titulo = styled.Text`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 19px;
  font-weight: bold;
  color: ${Color.secondary};
`;

export const TituloName = styled.Text`
  margin-top: 30px;
  margin-left: 15px;
  font-size: 24px;
  color: #fff;
`;

export const AjudaContainer = styled.TouchableOpacity`
  margin-top: 30px;
  margin-left: 20px;
  padding-top: 15px;
  padding-left: 30px;
  width: 90%;
  height: 70px;
  background-color: ${Color.secondary};
  border: 0.5px;
  border-radius: 6px;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  margin-left: 20px;
`;

export const AjudaText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  align-self: center;
`;

export const AjudaDescription = styled(AjudaText)`
  font-size: 14px;
  font-weight: normal;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  border-bottom-width: 0.2px;
  border-color: grey;
  border-style: solid;
  width: 100%;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  margin-left: 15px;
  margin-bottom: 20px;
  color: black;
  align-self: flex-start;
  margin-top: 15px;
`;

export const IconicHammer = styled(Icon)``;

export const Iconic = styled(IconicHammer)`
  position: absolute;
  margin-left: 93%;
  margin-top: 15px;
`;
