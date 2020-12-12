import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const windowWidth = `${Dimensions.get('window').width - 40}px`;

export const Container = styled.View`
  flex: 1;
  background: #E5E5E5;
`;

export const Header = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#34283E', '#845FA2'],
})`
  position: relative;
  width: 100%;
  height: 110px;
  padding: 20px;
`;

export const WrapperHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconMenu = styled(FontAwesomeIcon)`
  transform: scaleY(-1);
`;

export const ImageLogo = styled.Image`
  width: 88px;
  height: 24px;
`;

export const IconNotification = styled(FontAwesomeIcon)`
`;

export const WrapperSearch = styled.View`
  position: absolute;
  width: 100%;
  height: 44px;
  top: 88px;
  align-self: center;
`;

export const IconSearch = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  top: 10px;
  z-index: 99999;
`;

export const InputSearch = styled.TextInput`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: #FFFFFF;
  padding-left: 45px;
`;

export const Body = styled.View`
  flex: 1;
  padding: 20px;
`;

export const WrapperCarouselMainBanner = styled.View`
  width: 100%;
  height: 88px;
  margin-top: 20px;
`;

export const CarouselMainBanner = styled.ScrollView`
  border-radius: 10px;
`;

export const ImageMainBanner = styled.ImageBackground`
  position: relative;
  width: ${windowWidth};
  height: 100%;
`;

export const DetailMainBanner = styled.View`
  padding: 20px;
`;

export const DetailMainBannerTitle = styled.Text`
  font-size: 25px;
  color: #FFFFFF;
`;

export const DetailMainBannerSubTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #E7B944;
`;

export const IconDetailMainBanner = styled(FontAwesomeIcon)``;

export const FilterImageMainBanner = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['rgba(52,40,62,1)', 'rgba(52,40,62,1)'],
})`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;
