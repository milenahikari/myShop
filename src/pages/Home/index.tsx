import React from 'react';

import Logo from '../../assets/img/logo-my-shop.png';
import MainBanner1 from '../../assets/img/main-banner-1.png';
import MainBanner2 from '../../assets/img/main-banner-2.png';
import MainBanner3 from '../../assets/img/main-banner-3.png';

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
          showsHorizontalScrollIndicator={true}
          decelerationRate="fast"
          pagingEnabled
        >
          <S.ImageMainBanner source={MainBanner1} resizeMode='cover'>
            <S.FilterMainBanner />
            <S.DetailMainBanner>
              <S.DetailMainBannerTitle>Fashion Sale</S.DetailMainBannerTitle>
              <S.DetailMainBannerSubTitle>See More <S.IconMenu name="chevron-right" size={13} color="#E7B944" /></S.DetailMainBannerSubTitle>
            </S.DetailMainBanner>
          </S.ImageMainBanner>
          <S.ImageMainBanner source={MainBanner2} resizeMode='cover'>
            <S.FilterMainBanner />
          </S.ImageMainBanner>
          <S.ImageMainBanner source={MainBanner3} resizeMode='cover'>
            <S.FilterMainBanner />
          </S.ImageMainBanner>
        </S.MainBanner>
      </S.WrapperMainBanner>
    </S.WrapperBody>
  </S.Container >;
}

export default Home;
