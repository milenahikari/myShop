import React from 'react';
import { View, StatusBar } from 'react-native';

import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Home />

  </View>
);

export default App;
