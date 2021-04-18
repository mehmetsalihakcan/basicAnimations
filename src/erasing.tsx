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
  const [animation, setAnimated] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      duration: 5000,
      toValue: Dimensions.get('window').width - 200,
      //easing: Easing.bounce,
      //easing: Easing.back(10), // geri gidip tekrar ileri gitmeyi sağlar
      easing: Easing.elastic(10), //ileri gip gelir elastik bir şekilde

      useNativeDriver: false,
    }).start();
  };

  const animationStyles = {
    transform: [
      {translateY: animation}, //
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
  container: {flex: 1},
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',

    height: 200,
    width: 200,
  },
});

export default ScaleTransform;
