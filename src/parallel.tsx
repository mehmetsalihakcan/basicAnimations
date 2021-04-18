import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// klasik kullanım
const ScaleTransform = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(
    new Animated.Value(0.4),
  );

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(animationScale, {
        duration: 120,
        toValue: 1.3,
        useNativeDriver: false,
      }),

      Animated.timing(animationOpacity, {
        duration: 2000,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start(() => {
      alert('Bitti');
    });
  };

  const animationStyles = {
    transform: [
      {
        scale: animationScale,
      },
    ],
    opacity: animationOpacity,
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animationStyles]}>
          <Text>paralel</Text>
        </Animated.View>
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

export default ScaleTransform;
