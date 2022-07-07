import defaultTheme, { Theme } from '../../theme';

const extendTheme = (customTheme: Theme) => {
  console.log(defaultTheme);
  console.log(customTheme);
  console.log({
    ...defaultTheme,
    ...customTheme,
  });
  return {
    ...defaultTheme,
    ...customTheme,
  };
};

// export interface ThemeProviderProps
//   extends React.HTMLAttributes<HTMLDivElement> {
//   theme: Theme;
// }

// const ThemeProvider = ({ theme: Theme, children }: ThemeProviderProps) => {
//   return <div>{children}</div>;
// };

export default extendTheme;
