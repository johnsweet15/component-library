import defaultTheme, { Theme } from '../../theme';

const extendTheme = (customTheme: Theme) => {
  return {
    ...defaultTheme,
    ...customTheme,
  };
};

export default extendTheme;
