import React from 'react';

import Logo from '../../assets/img/logo-my-shop.png';
import MainBanner1 from '../../assets/img/main-banner-1.png';

import * as S from './styles'

const Home: React.FC = () => {
  return <S.Container>
    <S.Header>
      <S.WrapperHeader>
        <S.IconMenu name="align-left" size={20} color="#FFFFFF" />
        <S.ImageLogo source={Logo} resizeMode='contain' />
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

    <S.WrapperBody>
      <S.WrapperMainBanner>
        <S.MainBanner
          horizontal={true}
          contentContainerStyle={{ width: `${100 * 3}%` }}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
        >
          <S.ImageMainBanner source={MainBanner1} />
          <S.ImageMainBanner source={MainBanner1} />
          <S.ImageMainBanner source={MainBanner1} />
        </S.MainBanner>
      </S.WrapperMainBanner>
    </S.WrapperBody>
  </S.Container >;
}

export default Home;
