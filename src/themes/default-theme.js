import { createTheme  } from '@mui/material/styles';

const theme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiButton: {
        defaultProps: {
          // The default props to change
          sx: { 
            textTransform: 'none'
          }, // No more ripple, on the whole application 💣!
        },
      },
    },
  });

export { theme };