import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ImageBanner = styled.Image`
  width: 100%;
`;

export const Detail = styled.View`
  position: absolute;
  width: 269px;
  height: 146px;
  right: 0;
  top: 367px;
  background: #E7B944;
  opacity: 0.7;
  border-top-left-radius: 300px;
`;

export const LoginContent = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#34283E', '#845FA2'],
})`
  position: absolute;
  width: 100%;
  height: 291px;
  padding: 28px;
  top: 430px;
  bottom: 0;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  align-items: center;
`;

export const ImageLogo = styled.Image`
  width: 143px;
  height: 31px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const LoginDescription = styled.Text`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 32px;
  text-align: center;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 239px;
  height: 48px;
  background:#E7B944;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 17px;
  color: #ffffff;
`;
