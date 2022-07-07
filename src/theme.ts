export interface Theme {
  Button?: Button;
}

type Button = {
  backgroundColor?: string;
};

const theme: Theme = {
  Button: {
    backgroundColor: '#0000ff',
  },
};

export default theme;
