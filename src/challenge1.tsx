import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// ımage return ones
const LoopAndIteration = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [toggle, setToggle] = useState(true);
  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const animationHandle = React.useCallback(() => {
    startAnimation();
    setToggle(toggle);
  }, [toggle]);

  const interpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const animationStyles = {
    transform: [{rotate: interpolation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={animationHandle}>
        <Animated.Image
          source={require('./images/plantImage.jpg')}
          style={[styles.box, animationStyles]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {
    backgroundColor: 'orange',

    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoopAndIteration;
