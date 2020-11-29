import React from 'react';
import Logo from '../../assets/img/logo-my-shop.png';
import LoginBanner from '../../assets/img/login-banner.png';

import * as S from './styles'
import { Alert } from 'react-native';

const Login: React.FC = () => {
  async function handleSignInWithGoogle(): Promise<void> {
    Alert.alert("Login");
  }
  return <S.Container>
    <S.ImageBanner source={LoginBanner} />
    <S.Detail />
    <S.LoginContent>
      <S.ImageLogo source={Logo} />
      <S.LoginDescription>Lorem Ipsum is simply dummy text of the printing and typesettings industry</S.LoginDescription>
      <S.LoginButton onPress={handleSignInWithGoogle}>
        <S.LoginButtonText>Get Started</S.LoginButtonText>
      </S.LoginButton>
    </S.LoginContent>
  </S.Container>;
}

export default Login;
