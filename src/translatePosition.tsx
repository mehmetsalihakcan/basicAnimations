import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const TranslatePosition = () => {
  const [animation, setAnimated] = useState(new Animated.Value(100));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const animatedStyles = {
    transform: [{translateX: animation}],
  };
  console.log(animation);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Translation</Text>
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

export default TranslatePosition;
