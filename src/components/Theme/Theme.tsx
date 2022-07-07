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
  console.log(defaultTheme);
  console.log(customTheme);
  console.log({
    ...defaultTheme,
    ...customTheme,
  });
  theme = {
    ...defaultTheme,
    ...customTheme,
  };
};

// export default theme;

// export interface ThemeProviderProps
//   extends React.HTMLAttributes<HTMLDivElement> {
//   theme: Theme;
// }

// const ThemeProvider = ({ theme: Theme, children }: ThemeProviderProps) => {
//   return <div>{children}</div>;
// };

export { theme };
export default extendTheme;
