import defaultTheme from '../../theme';

export interface Theme {
  components?: Components;
}

type Components = {
  Button?: Button;
};

type Button = {
  backgroundColor?: string;
};

let theme: Theme = {
  components: {
    Button: {
      backgroundColor: '#0000ff',
    },
  },
};

const extendTheme = (customTheme: Theme) => {
  theme = {
    ...defaultTheme,
    ...customTheme,
  };
};

export { theme };
export default extendTheme;
