import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// aralıklı animasyon oluşturma
const ScaleTransform = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(
    new Animated.Value(0.4),
  );

  const startAnimation = () => {
    Animated.stagger(2000, [
      Animated.timing(animationScale, {
        duration: 120,
        toValue: 1.3,
        useNativeDriver: false,
      }),

      Animated.timing(animationOpacity, {
        duration: 500,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start(() => {
      alert('iki animasyon da bitti');
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
          <Text>animation with interval </Text>
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
