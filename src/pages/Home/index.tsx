import React, { useState, useEffect, useCallback } from 'react';

import Logo from '../../assets/img/logo-my-shop.png';

import apiMainBanners from '../../services/api/mainBanners.json';
import apiCatalogues from '../../services/api/catalogues.json';

import * as S from './styles';
import { Alert } from 'react-native';

interface MainBanner {
  id: number;
  title: string;
  subtitle: string;
  photo: string;
}

interface Catalogue {
  id: number;
  name: string;
  photo: string;
}

const Home: React.FC = () => {
  const [mainBanners, setMainBanners] = useState<MainBanner[]>([]);
  const [catalogues, setCatalogues] = useState<Catalogue[]>([]);

  useEffect(() => {
    setMainBanners(apiMainBanners.mainBanners);
    setCatalogues(apiCatalogues.catalogues);
  }, []);

  const handleSeeAllCatalogues = useCallback(() => {
    Alert.alert('List catalogues!', 'Catalogues...');
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

    <S.Body>
      <S.WrapperCarouselMainBanner>
        <S.CarouselMainBanner
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          decelerationRate="fast"
          pagingEnabled
        >
          {mainBanners.map((mainBanner: MainBanner) => (
            <S.ImageMainBanner
              key={mainBanner.id}
              source={{ uri: mainBanner.photo }}
              resizeMode='cover'
              imageStyle={{ borderRadius: 8 }}
            >
              <S.FilterImageMainBanner />
              {!!(mainBanner.title.length && mainBanner.subtitle) &&
                <S.DetailMainBanner>
                  <S.DetailMainBannerTitle>{mainBanner.title}</S.DetailMainBannerTitle>
                  <S.DetailMainBannerSubTitle>
                    {mainBanner.subtitle} <S.IconArrowRight name="chevron-right" size={12} color="#E7B944" />
                  </S.DetailMainBannerSubTitle>
                </S.DetailMainBanner>
              }
            </S.ImageMainBanner>
          ))}
        </S.CarouselMainBanner>
      </S.WrapperCarouselMainBanner>

      <S.WrapperCatalogues>
        <S.WrapperCataloguesDetail>
          <S.CatalogueTitle>Catalogue</S.CatalogueTitle>
          <S.ButtonCatalogues onPress={handleSeeAllCatalogues}>
            <S.ButtonCataloguesText>See All</S.ButtonCataloguesText>
            <S.IconArrowRight name="chevron-right" size={12} color="#9B9B9B" />
          </S.ButtonCatalogues>
        </S.WrapperCataloguesDetail>

        <S.WrapperCarouselCatalogues>
          <S.CarouselCatalogues
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            pagingEnabled
          >
            {catalogues.map((catalogue: Catalogue) => (
              <S.ImageCatalogue
                key={catalogue.id}
                source={{ uri: catalogue.photo }}
                resizeMode='cover'
                imageStyle={{ borderRadius: 8 }}
              >
                <S.FilterImageMainBanner />
                <S.CatalogueName>{catalogue.name}</S.CatalogueName>
              </S.ImageCatalogue>
            ))}
          </S.CarouselCatalogues>
        </S.WrapperCarouselCatalogues>
      </S.WrapperCatalogues>

    </S.Body>
  </S.Container >;
}

export default Home;
