import React from 'react';

import Logo from '../../assets/img/logo-my-shop.png';

import * as S from './styles'

const Home: React.FC = () => {
  return <S.Container>
    <S.Header>
      <S.WrapperHeader>
        <S.IconMenu name="align-left" size={20} color="#FFFFFF" />
        <S.ImageLogo source={Logo} />
        <S.IconNotification name="bell-o" size={20} color="#FFFFFF" />
      </S.WrapperHeader>
      <S.WrapperSearch>
        <S.IconSearch name="search" size={20} color="#9B9B9B" />
        <S.InputSearch
          placeholder="What are you looking for?"
          placeholderTextColor="#9B9B9B"
          autoCorrect={false} />
      </S.WrapperSearch>
    </S.Header>
  </S.Container >;
}

export default Home;
