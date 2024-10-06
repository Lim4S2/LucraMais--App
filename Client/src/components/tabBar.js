import { View } from 'react-native';
import styles from './style'
import TabBarButton from './tabarButton';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { useState } from 'react';

export default function TabBar({ state, descriptors, navigation } ) {

  const [dimensions, setDimensions] = useState({ width: 100, height: 20});

  const buttonWidth = dimensions.width / state.routes.length

  const onTabbarLayout = (LayoutChangeEvent) => {
    setDimensions({
      height: LayoutChangeEvent.nativeEvent.layout.height,
      width: LayoutChangeEvent.nativeEvent.layout.width
    })
  }

  const tabPositionX = useSharedValue(0)
  const animatedStyle =  useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabPositionX.value}]
    }
  })

  return (
    <View onLayout={onTabbarLayout} style={styles.buttonTab}>
      <Animated.View style={[ animatedStyle, {
        position: "absolute",
        backgroundColor: "#6294ac", 
        borderRadius: 30,
        marginHorizontal: 12,
        height: dimensions.height - 15,
        width: buttonWidth - 25
      }]}/>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {duration: 1000})
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TabBarButton
            key={route.key}
            onPress={onPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ?  '#6294ac' : '#fff'}
            label={label}
          />
        );
      })}
    </View>
  );
}