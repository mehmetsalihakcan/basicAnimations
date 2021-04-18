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
      duration: 2000,
      toValue: 1,
      useNativeDriver: false,
    }).start();
  };
  const boxInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'black'],
  });

  const textInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'white'],
  });

  const boxAnimationStyles = {
    backgroundColor: boxInterpolate,
  };

  const textAnimationStyles = {
    color: textInterpolate,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimationStyles]}>
          <Animated.Text style={textAnimationStyles}>
            ScaleTransform
          </Animated.Text>
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
