import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #fff;
  align-self: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  margin-left: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-weight: bold;
  color: #670099;
  text-align: left;
`;

export const Iconic = styled(Icon)`
  position: absolute;
  margin-top: 12px;
  margin-left: 93%;
`;
