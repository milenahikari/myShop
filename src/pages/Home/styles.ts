import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex: 1;
  background: lightblue;
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
  resizeMode: contain;
`;

export const IconNotification = styled(FontAwesomeIcon)`
`;

export const WrapperSearch = styled.View`
  position: absolute;
  width: 335px;
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
