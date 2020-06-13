import styled from 'styled-components';

import Color from '../../../config/Theme';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${Color.background};
`;

export const Titulo = styled.Text`
  margin-left: 5%;
  margin-top: 8%;
  font-size: 25px;
  color: ${Color.primary};
  margin-bottom: 2px;
`;

export const PlanoID = styled.Text`
  margin-left: 5%;
  font-size: 12px;
  color: grey;
`;

export const ContaContainer = styled.View`
  align-self: center;
  width: 95%;
  margin-bottom: 15px;
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 15px;
  background-color: ${Color.secondary};
  border-radius: 5px;
  border-top-width: 5px;
  border-color: orange;
  border-style: solid;
`;

export const ContaContainerRed = styled(ContaContainer)`
  border-color: red;
`;

export const ContaInfo = styled.Text`
  margin-right: 105px;
  font-size: 19px;
  color: black;
`;

export const ThreeDots = styled.Image`
  position: absolute;
  margin-left: 87%;
  margin-top: 4%;
  width: 35px;
  height: 35px;
`;

export const ContaPreco = styled.Text`
  margin-top: 30px;
  font-size: 42px;
  color: orange;
`;

export const ContaPrecoRed = styled(ContaPreco)`
  color: red;
`;

export const ContaVence = styled.Text`
  margin-top: 0px;
  font-size: 13px;
  color: black;
`;

export const ButtonContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-bottom: 15px;
  margin-right: 15px;
  right: 1px;
  width: 45%;
  height: 30px;
  border-bottom-width: 3px;
  border-color: rgb(142, 191, 50);
  border-style: solid;
  background: rgb(153, 204, 51);
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 5px;
`;

export const WhiteButtonText = styled(ButtonText)`
  color: black;
`;

export const WhiteButton = styled(Button)`
  border-width: 1px;
  border-color: lightgrey;
  background: #fff;
`;
