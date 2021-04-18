import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
// aralıklı animasyon oluşturma
const Delay = () => {
  const [animationScale, setAnimationScale] = useState(new Animated.Value(1));
  const [animationOpacity, setAnimationOpacity] = useState(
    new Animated.Value(0.4),
  );

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animationScale, {
        duration: 120,
        toValue: 1.3,
        useNativeDriver: false,
      }),
      Animated.delay(3000), // bekletme yapıyoruz
      Animated.timing(animationOpacity, {
        duration: 500,
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.delay(3000),

      Animated.timing(animationOpacity, {
        duration: 120,
        toValue: 2,
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

export default Delay;
