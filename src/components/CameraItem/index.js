import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

export const CameraItem = ({ name, onPress, id }) => {
  const handler = useCallback(() => onPress(id), [onPress, id]);

  return (
    <Pressable style={styles.item} onPress={handler}>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};
