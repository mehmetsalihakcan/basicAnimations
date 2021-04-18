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
      duration: 500,
      toValue: 30,
      useNativeDriver: false,
    }).start();
  };
  const animatedStyles = {
    bottom: animation,
    left: animation,
    riright: animation,

    //    transform: [{scaleX: animation}],// sadece 1 eksende ordanan veya
    //    transform: [{scaleY: animation}],  // üsten bütütülüp ,küçültülebilir.
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
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
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});

export default ScaleTransform;
