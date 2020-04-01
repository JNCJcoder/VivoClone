import TextInputMask from 'react-native-text-input-mask';
import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  align-self: center;
`;

export const Telefone = styled(TextInputMask)`
  width: 85%;
  font-size: 18px;
  align-self: center;
  border-bottom-color: ${(props) => (props.Focus ? 'green' : 'grey')};
  border-bottom-width: 2px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const IconButton = styled.TouchableOpacity``;

export const Iconic = styled(Icon)`
  margin-left: 15px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-bottom-width: 3px;
  border-color: ${(props) =>
    props.disabled ? 'rgba(142, 191, 50, 0.5)' : 'rgb(142, 191, 50)'};
  border-style: solid;
  background: ${(props) =>
    props.disabled ? 'rgba(153, 204, 51, 0.5)' : 'rgb(153, 204, 51)'};
  align-self: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: white;
  align-self: center;
  margin-top: 12px;
`;
