import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import Home from './src/home';

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Home />
      </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  container:{
    flex:1,
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300
    
  }
});

export default App;
