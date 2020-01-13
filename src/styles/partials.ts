const colors = {
  YELLOW: '#ffd33d',
  YELLOW_LIGHT: '#fff8e0', // by 32%
  BLACK: '#000000',
  CHARCOAL: '#404041',
  GREY_LIGHT: '#eeeeee',
  GREY_MID: '#d5d5d5',
  GREY: '#9b9b9b',
  GREEN: '#37bc9b',
  RED: '#da4453',
  BLUE: '#4a90e2',
  BLUE_LIGHT: '#bbdeff',
  APPLE_BLUE: '#007AFF',
};

const breakpoints = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '992px',
  DESKTOP_LARGE: '1200px',
};

const device = {
  MOBILE: `(max-width: ${breakpoints.MOBILE})`,
  TABLET: `(max-width: ${breakpoints.TABLET})`,
  DESKTOP: `(max-width: ${breakpoints.DESKTOP})`,
  DESKTOP_LARGE: `(max-width: ${breakpoints.DESKTOP_LARGE})`,
};

export { colors, breakpoints, device };
