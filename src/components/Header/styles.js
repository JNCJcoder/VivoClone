import styled from 'styled-components';

export const Container = styled.View`
  flex-direction: row;
  max-width: 100%;
  justify-content: center;
  background: #fff;
`;

export const ItemMenu = styled.TouchableOpacity`
  width: 33%;
  align-items: center;
  height: 40px;
  margin-top: 15px;
  background: #fff;
`;

export const ItemMenuSelected = styled(ItemMenu)`
  border-bottom-width: 2px;
  border-color: green;
  border-style: solid;
`;

export const ItemName = styled.Text`
  font-size: 17px;
  color: grey;
  font-weight: bold;
`;

export const ItemNameSelected = styled(ItemName)`
  color: #670099;
`;
