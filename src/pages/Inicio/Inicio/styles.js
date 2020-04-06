import styled from 'styled-components';

import Color from '../../../config/Theme';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const InicialContainer = styled.View`
  flex: 1;
`;

export const Logo = styled.Image`
  left: 25px;
  top: 20px;
  width: 300px;
  height: 110px;
`;

export const InfoContainer = styled.ScrollView`
  flex: 1;
  margin-top: 160px;
  margin-bottom: 60px;
`;

export const InfoItem = styled.View`
  width: 350px;
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

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  border-bottom-width: 3px;
  border-style: solid;
  border-color: rgb(91, 4, 134);
  background: ${Color.primary};
  align-self: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${Color.secondary};
  text-align: center;
  margin-top: 13px;
`;

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
