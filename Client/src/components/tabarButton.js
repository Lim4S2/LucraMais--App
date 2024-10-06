import { Pressable, Text, View } from "react-native"
import { icon } from "./icon"
import styles from "./style"

import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { useEffect } from "react"


const TabBarButton = ({ onPress, isFocused, label, color, routeName }) => {

    const scale = useSharedValue(0)

    useEffect (() => { 
      scale.value = withSpring(
        typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused, {duration: 350}
      )
    }, [scale, isFocused])

    const animatedIconStyle = useAnimatedStyle(() => {
      const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2])

      const top = interpolate(scale.value, [0, 1],  [0, 10])

      return {
        transform: [{ scale: scaleValue }], 
        top
      }
    })
  
    const animatedTextStyle = useAnimatedStyle(() => {
      const opacity = interpolate(scale.value, [0, 1], [1, 0])
  
      return{
        opacity
      }
    })

    return (
        <Pressable
            onPress={onPress}
            style={styles.tabbarItem}
        >
            <Animated.View style={animatedIconStyle}>
              {icon[routeName]({
                color: isFocused ? 'white' : '#222'
              })}
            </Animated.View>
                <Animated.Text style={[{ color: isFocused ? 'white' : '#222' }, animatedTextStyle]}>
                  {label}
            </Animated.Text>
      </Pressable>
    )
}

export default TabBarButton