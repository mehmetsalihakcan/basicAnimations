import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
// klasik kullanım
const ScaleTransform = () => {
  const [animation, setAnimated] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.spring(animation, {
      duration: 300,
      toValue: 30,
      useNativeDriver: false,
    }).start();
  };

  const animationStyles = {
    bottom: animation,
    left: animation,
    right: animation,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Text>Aşağıdan orantılı küçülme</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {
    backgroundColor: 'orange',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScaleTransform;
