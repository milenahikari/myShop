import React, { useState, useEffect, useCallback, useMemo } from 'react';

import Logo from '../../assets/img/logo-my-shop.png';

import apiMainBanners from '../../services/api/mainBanners.json';
import apiCatalogues from '../../services/api/catalogues.json';
import apiFeatures from '../../services/api/features.json';

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

interface Featured {
  id: number;
  photo: string;
  description: string;
  price: number;
  price_discount: number;
  rating: number;
}

const Home: React.FC = () => {
  const [mainBanners, setMainBanners] = useState<MainBanner[]>([]);
  const [catalogues, setCatalogues] = useState<Catalogue[]>([]);
  const [features, setFeatures] = useState<Featured[]>([]);

  useEffect(() => {
    setMainBanners(apiMainBanners.mainBanners);
    setCatalogues(apiCatalogues.catalogues);
    setFeatures(apiFeatures.features);
  }, []);

  const formatPrice = useMemo(() => (price: string) => {
    return `$${parseFloat(price).toFixed(2)}`;
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
          <S.Title>Catalogue</S.Title>

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

      <S.WrapperFeatures>
        <S.Title>Featured</S.Title>

        <S.WrapperCardFeatures>
          {features.map((featured: Featured) => (
            <S.CardFeatures key={featured.id}>
              <S.ImageFeatures
                source={{ uri: featured.photo }}
                resizeMode='contain'
              />
              <S.ButtonFavourite>
                <S.IconHeart name="heart-o" size={20} color="#E7B944"></S.IconHeart>
              </S.ButtonFavourite>
              <S.WrapperEvaluation>

              </S.WrapperEvaluation>
              <S.Description
                numberOfLines={2}
              >{featured.description}</S.Description>
              <S.WrapperPrice>{formatPrice(featured.price)}</S.WrapperPrice>
            </S.CardFeatures>
          ))}

        </S.WrapperCardFeatures>
      </S.WrapperFeatures>

    </S.Body>
  </S.Container >;
}

export default Home;
