import Icon from "react-native-vector-icons/Ionicons";

import styled from "styled-components";

import Color from "../../../config/Theme";

export const Container = styled.ScrollView`
  flex: 1;
  background: ${Color.background};
`;

export const Atualizado = styled.Text`
  align-self: center;
  margin-left: 38%;
  margin-top: 4%;
  font-size: 12px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const Barrinha = styled.View`
  width: 94%;
  height: 1px;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(232, 236, 239);
`;

export const PlanoContainer = styled.View`
  flex: 1;
  align-self: center;
  width: 95%;
  margin-bottom: 15px;
  padding-left: 20px;
  background-color: ${Color.secondary};
  border-color: #000;
  border-width: 0.1px;
  border-radius: 5px;
`;

export const PlanoNome = styled.Text`
  margin-top: 10px;
  font-size: 19px;
  font-weight: bold;
  color: #000;
  align-self: center;
`;

export const ConsumosContainer = styled.View`
  flex: 1;
  padding-right: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RenovaContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const MinMaxContainer = styled.View`
  position: relative;
  margin-top: 10px;
  flex-direction: row;
`;
export const MinUso = styled.Text`
  color: grey;
`;

export const MaxUso = styled.Text`
  position: absolute;
  margin-left: 84%;
  color: grey;
`;

export const BarraDeUso = styled.View`
  width: 95%;
  height: 20px;
  margin-top: 5px;
  background-color: rgb(232, 236, 239);
  border-radius: 12px;
`;

export const CircleBar = styled.View`
  width: 12px;
  height: 12px;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 10px;
  background-color: rgb(232, 236, 239);
  border-radius: 6px;
`;

export const CircleBarBlue = styled(CircleBar)`
  background-color: ${Color.primary};
`;

export const Renova = styled.Text`
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
  color: black;
  align-self: flex-start;
`;

export const Button = styled.TouchableOpacity`
  margin-bottom: 15px;
  right: 1px;
  width: 95%;
  height: 50px;
  border-bottom-width: 3px;
  border-color: rgb(142, 191, 50);
  border-style: solid;
  background: rgb(153, 204, 51);
  align-self: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 15px;
`;

export const PurpleSquare = styled.View`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-bottom: 10px;
  width: 100%;
  height: 170px;
  background-color: ${Color.primary};
`;

export const ShareContainer = styled(PlanoContainer)`
  top: 0px;
  align-self: center;
  margin-bottom: 20px;
  padding-left: 0px;
  padding-left: 20px;
  border-radius: 6px;
`;

export const ShareNome = styled(PlanoNome)`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 23px;
  font-weight: bold;
  color: #000;
  align-self: flex-start;
  text-align: left;
`;

export const ShareItem = styled.TouchableOpacity`
  border-bottom-width: 0.2px;
  border-color: grey;
  border-style: solid;
  width: 100%;
  flex-direction: row;
`;

export const ShareText = styled.Text`
  font-size: 17px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
  color: ${Color.primary};
  text-align: left;
`;

export const DetailContainer = styled(ShareContainer)`
  padding-left: 0px;
`;

export const DetailItem = styled.TouchableOpacity`
  margin-bottom: 10px;
  width: 100%;
  flex-direction: row;
`;

export const DetailText = styled(ShareText)`
  font-size: 15px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${Color.primary};
  text-align: left;
`;

export const Iconic = styled(Icon)`
  position: absolute;
  margin-top: 20px;
  margin-left: 93%;
`;
