import React, { createContext, useMemo, useState, useCallback } from 'react';
import { Alert } from 'react-native';

export const CamerasContext = createContext({});

export const CamerasProvider = ({ children }) => {
  const [cameras, setCameras] = useState([]);

  const getCameras = useCallback(async () => {
    try {
      const res = await fetch(
        'http://runningios.com/screamingbox/cameras.json',
        {
          method: 'GET',
        },
      );
      const camerasList = await res.json();
      setCameras(camerasList);
    } catch (e) {
      console.log(e);
      Alert.alert('Oops!', e.message);
    }
  }, []);

  const getCameraById = useCallback(
    (id) => cameras.find((item) => item.id === id),
    [cameras],
  );

  const contextValue = useMemo(() => {
    return {
      getCameras,
      cameras,
      getCameraById,
    };
  }, [getCameras, cameras, getCameraById]);

  return (
    <CamerasContext.Provider value={contextValue}>
      {children}
    </CamerasContext.Provider>
  );
};
