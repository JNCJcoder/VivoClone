import Icon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: 8px;
  padding-right: 20px;
  padding-left: 20px;
  background: #fff;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  color: grey;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Description = styled(Titulo)`
  font-weight: normal;
  margin-bottom: 15px;
`;

export const IconButton = styled.TouchableOpacity``;

export const Iconic = styled(Icon)`
  margin-left: 20px;
  color: #fff;
`;
