import React, { useCallback, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import { CameraItem } from '../../components/CameraItem';
import { CamerasContext } from '../../providers/CamerasProvider';

const keyExtractor = (item) => item.id;

export const CamerasList = () => {
  const navigation = useNavigation();
  const { cameras, getCameras } = useContext(CamerasContext);

  useEffect(() => {
    getCameras();
  }, [getCameras]);

  const onPress = useCallback(
    (id) => navigation.navigate('CameraScreen', { id }),
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }) => (
      <CameraItem name={item.name} id={item.id} onPress={onPress} />
    ),
    [onPress],
  );

  return (
    <View>
      <FlatList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={cameras}
      />
    </View>
  );
};
