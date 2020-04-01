import React from 'react';

import { Header } from '../../../components';
import { Container, ButtonText, Button, Iconic } from './styles';

export default function Servicos() {
  return (
    <>
      <Header Numeral={3} />
      <Container>
        <Button>
          <ButtonText>
            Detalhe do Plano{'                                      '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Troca de Plano{'                                         '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Troca de Aparelho{'                                   '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Lançamentos Futuros{'                             '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Pacotes{'                                                      '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Vivo Valoriza
            {'                                             '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Roaming - Vivo Travel
            {'                            '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Faça uma recarga
            {'                                    '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Meus saldos{'                                             '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
        <Button>
          <ButtonText>
            Vivo App Store{'                                         '}
          </ButtonText>
          <Iconic name="ios-arrow-forward" size={20} />
        </Button>
      </Container>
    </>
  );
}
