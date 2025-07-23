import React, { createContext, useContext, useEffect, useState } from 'react';

import { getDeviceSize } from '../hooks/use-device-size';

type DeviceSize = 'xs' | 'xl';

export const DeviceSizeContext = createContext<DeviceSize | undefined>(
  undefined
);

const DeviceSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>(() =>
    getDeviceSize(window.innerWidth)
  );

  const handleResize = () => {
    setDeviceSize(getDeviceSize(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <DeviceSizeContext.Provider value={deviceSize}>
      {children}
    </DeviceSizeContext.Provider>
  );
};

const useDeviceSize = () => {
  const context = useContext(DeviceSizeContext);
  if (context === undefined) {
    throw new Error('useDeviceSize must be used within a DeviceSizeProvider');
  }
  return context;
};

export { DeviceSizeProvider, useDeviceSize };
