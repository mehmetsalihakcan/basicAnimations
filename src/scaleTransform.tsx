import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const ScaleTransform = () => {
  const [animation, setAnimated] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: -2, //ters çevirir
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    transform: [{scaleY: animation}],
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
    borderRadius: 20,
    width: 200,
    height: 200,
  },
});

export default ScaleTransform;
