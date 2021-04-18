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
      duration: 1000,
      toValue: Dimensions.get('window').width - 200,
      //easing: Easing.bounce,
      easing: Easing.back(4), // geri gidip tekrar ileri gitmeyi sağlar
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(animation, {
        duration: 1000,
        toValue: 0,
        //easing: Easing.bounce,
        easing: Easing.back(4), // geri gidip tekrar ileri gitmeyi sağlar
        useNativeDriver: false,
      }).start(() => {
        startAnimation();
      });
    });
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
          <Text>Sağa sola sonsuz dön</Text>
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
