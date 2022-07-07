import defaultTheme, { Theme } from '../../theme';

let theme: Theme;

const extendTheme = (customTheme: Theme) => {
  theme = {
    ...defaultTheme,
    ...customTheme,
  };
};

export { theme };
export default extendTheme;
