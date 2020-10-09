import styled from "styled-components/native";

import Color from '../../config/Theme';

export const Header = styled.View`
  height: 50px;
  background-color: ${Color.primary};
  justify-content: space-between;
  padding-top: 15px;
  padding-left: 15px;
  margin-top: 24px;
`;

export const HeaderText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: ${Color.secondary};
`;
