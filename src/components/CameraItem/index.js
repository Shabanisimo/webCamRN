import React, { useCallback } from 'react';
import { Pressable, Text } from 'react-native';

export const CameraItem = ({ name, onPress, id }) => {
  const handler = useCallback(() => onPress(id), [onPress, id]);

  return (
    <Pressable onPress={handler}>
      <Text>{name}</Text>
    </Pressable>
  );
};
