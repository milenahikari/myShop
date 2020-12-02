import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background: lightblue;
`;
export const Header = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#34283E', '#845FA2'],
})`
  width: 100%;
  height: 110px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ImageLogo = styled.Image`
  width: 88px;
  height: 24px;
  resizeMode: contain;
`;
