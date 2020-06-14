import TextInputMask from 'react-native-text-input-mask';

import styled from 'styled-components';

import Color from '../../../config/Theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${Color.background};
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 17px;
`;

export const Telefone = styled(TextInputMask)`
  width: 85%;
  font-size: 35px;
  text-align: center;
  border-bottom-color: grey;
  border-bottom-width: 2px;
`;
