/* eslint-disable * */

import { Dimensions } from "react-native";

import styled from "styled-components";

import Color from "../../../config/Theme";

const screenWidth = Dimensions.get("window").width;

//
// Container
//
export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  justify-content: center;
  background: #000;
`;

export const InicialContainer = styled.View`
  flex: 1;
`;

//
// Logo
//

export const Logo = styled.Image`
  margin-left: 6%;
  width: 90%;
  height: 20%;
`;

//
// Info Container
//

export const InfoContainer = styled.ScrollView`
  flex: 1;
  margin-top: 160px;
  margin-bottom: 40px;
`;

export const InfoItem = styled.View`
  flex: 1;
  width: ${screenWidth}px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Color.secondary};
  align-self: center;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  max-width: 90%;
  font-size: 15px;
  color: ${Color.secondary};
  align-self: center;
  text-align: center;
`;

//
// Button Começar Agora
//

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: rgb(91, 4, 134);
  background: ${Color.primary};
  padding-top: 14px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${Color.secondary};
  text-align: center;
`;

//
// Termos e Condições
//

export const TermosContainer = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const TermosLink = styled.TouchableOpacity``;

export const Termos = styled.Text`
  font-size: 16px;
  color: ${Color.secondary};
  align-self: center;
`;
