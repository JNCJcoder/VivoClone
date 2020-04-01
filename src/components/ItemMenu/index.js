import React from 'react';

import { Button, ButtonText, Iconic } from './styles';

export default function ItemMenu(props) {
  return (
    <Button>
      <ButtonText>{props.children}</ButtonText>
      <Iconic name="ios-arrow-forward" size={20} />
    </Button>
  );
}
