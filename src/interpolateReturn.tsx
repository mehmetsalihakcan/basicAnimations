import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const ScaleTransform = () => {
  const [animation, setAnimated] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      duration: 1000,
      toValue: 360,
      useNativeDriver: false,
    }).start();
  };
  const interpolatation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animationStyles = {
    transform: [
      {rotate: interpolatation}, //  {rotateX: interpolatation} veya   {rotateX: interpolatation} exsenlerinde dönebilir
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Text>ScaleTransform</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',

    height: 200,
    width: 200,
  },
});

export default ScaleTransform;
