import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import Home from './src/home';

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={{}}>
        <Home />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
