export interface Theme {
  components?: Components;
}

type Components = {
  Button?: Button;
};

type Button = {
  backgroundColor?: string;
};

const theme: Theme = {
  components: {
    Button: {
      backgroundColor: '#0000ff',
    },
  },
};

export default theme;
