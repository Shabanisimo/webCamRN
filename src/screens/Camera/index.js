import React, { useContext, useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { CamerasContext } from '../../providers/CamerasProvider';
import { styles } from './styles';

export const CameraScreen = () => {
  const [camera, setCamera] = useState(null);
  const { getCameraById } = useContext(CamerasContext);
  const { params } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const res = getCameraById(params.id);
    setCamera(res);
    navigation.setOptions({ title: res.name });
  }, [navigation, getCameraById, params]);

  return (
    <View style={styles.container}>
      <ReactNativeZoomableView maxZoom={2} initialZoom={2} bindToBorders={true}>
        <Image style={styles.image} source={{ uri: camera?.source }} />
      </ReactNativeZoomableView>
    </View>
  );
};
