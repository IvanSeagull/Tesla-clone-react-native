import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = ({ type, content, onPress }) => {
  //   console.warn(type);

  const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffA6';
  const textColor = type === 'primary' ? '#fff' : '#171a20';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: backgroundColor }]}
        onPress={onPress && onPress}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
