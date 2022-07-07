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

// class Theme {
//   components: Components;

//   constructor() {
//     this.components = {
//       Button: {
//         backgroundColor: '#0000ff',
//       },
//     };
//   }

//   getComponents = () => {
//     return this.components;
//   };

//   setComponents = (components: Components) => {
//     this.components = components;
//   };
// }
