import React from 'react';
import Logo from '../../assets/img/logo-my-shop.png';

import * as S from './styles'

const Home: React.FC = () => {
  return <S.Container>
    <S.Header>
      <S.ImageLogo source={Logo} />
    </S.Header>
  </S.Container>;
}

export default Home;
