import React, { useState, useEffect } from 'react';

import Logo from '../../assets/img/logo-my-shop.png';

import api from '../../services/api/mainBanners.json';

import * as S from './styles';

interface MainBanner {
  id: number;
  title: string;
  subtitle: string;
  picture: string;
}

const Home: React.FC = () => {
  const [mainBanners, setMainBanners] = useState<MainBanner[]>([]);

  useEffect(() => {
    setMainBanners(api.mainBanners);
  }, []);

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
          {mainBanners.map((mainBanner: MainBanner) => (
            <S.ImageMainBanner key={mainBanner.id} source={{ uri: mainBanner.picture }} resizeMode='cover'>
              <S.FilterMainBanner />
              {!!(mainBanner.title.length && mainBanner.subtitle) &&
                <S.DetailMainBanner>
                  <S.DetailMainBannerTitle>{mainBanner.title}</S.DetailMainBannerTitle>
                  <S.DetailMainBannerSubTitle>
                    {mainBanner.subtitle} <S.IconMenu name="chevron-right" size={12} color="#E7B944" />
                  </S.DetailMainBannerSubTitle>
                </S.DetailMainBanner>
              }
            </S.ImageMainBanner>
          ))}
        </S.MainBanner>
      </S.WrapperMainBanner>
    </S.WrapperBody>
  </S.Container >;
}

export default Home;
