export const getDeviceSize = (width: number) => {
  if (width < 500) {
    return 'xs';
  }

  return 'xl';
};
