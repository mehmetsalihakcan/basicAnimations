import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// aralıklı animasyon oluşturma
const Loop = () => {
  const [topValue, setTopValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(topValue, {
        duration: 1000,
        toValue: 300,
        useNativeDriver: false,
      }),
    ).start();
  };

  const animationStyles = {
    top: topValue,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Text>loop</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {
    backgroundColor: 'orange',
    top: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default Loop;
