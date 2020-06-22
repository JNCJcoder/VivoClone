import styled from "styled-components";

import Color from "../../../config/Theme";

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
