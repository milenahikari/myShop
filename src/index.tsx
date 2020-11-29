import React from 'react';
import { View, StatusBar } from 'react-native';

import Login from './pages/Login';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Login />

  </View>
);

export default App;
