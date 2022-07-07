export interface Theme {
  components?: Components;
}

type Components = {
  Button?: React.CSSProperties;
};

const theme: Theme = {
  components: {
    Button: {
      backgroundColor: '#0000ff',
    },
  },
};

export default theme;
