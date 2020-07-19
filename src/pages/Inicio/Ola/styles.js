import styled from "styled-components";

import Color from "../../../config/Theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${Color.primary};
`;

export const SubTexto = styled.Text`
  font-size: 22px;
  color: #ffffff;
`;

export const Texto = styled(SubTexto)`
  font-size: 32px;
  font-weight: bold;
`;
