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
// sürtünmeden dolayı sekme yapmak için kullanılır.
const ScaleTransform = () => {
  const [animation, setAnimated] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.spring(animation, {
      duration: 200,
      toValue: 2,
      friction: 2,
      useNativeDriver: false,
    }).start();
  };

  const animationStyles = {
    transform: [
      {scale: animation}, //
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Text>elastik büyüme</Text>
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

    height: 100,
    width: 100,
  },
});

export default ScaleTransform;
