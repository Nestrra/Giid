import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";
import type {} from '@mui/lab/themeAugmentation';
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary:true
  }
}

export const theme = createTheme({
    palette: {
      primary: {
        main: '#ED9455',
        light:'#833e0c'
      },
      secondary: {
        main: '#0d283f',
        light:'#1D5689'
      },   
      error: {
        main: red[600],
      },
     },
     components: {
      // Name of the component
      MuiTextField:{


      },
      MuiButton: {
        variants: [
          {
            props: { variant: 'primary' },
            style: {
              color:'white',
              boxShadow:'none',
              borderRadius:'0.4em',
              fontSize:'0.95rem',
              textTransform:'none',
              backgroundColor:'#ED9455',
              ":hover":{
                background:'#ED9455'

              }
            },
          },
          {
            props: { variant: 'secondary' },
            style: {
              color:'white',
              boxShadow:'none',
              borderRadius:'0.4em',
              fontSize:'0.95rem',
              textTransform:'none',
              backgroundColor:'#1D5689',
              ":hover":{
                background:'#154066'

              }
            },
          },
        ],
       
      },
      MuiLoadingButton:{
        variants: [
          {
            props: { variant: 'primary' },
            style: {
              color:'white',
              boxShadow:'none',
              borderRadius:'0.4em',
              fontSize:'0.95rem',
              textTransform:'none',
              backgroundColor:'#ED9455',
              ":hover":{
                background:'#cd7638'

              }
            },
          },
          {
            props: { variant: 'secondary' },
            style: {
              color:'white',
              boxShadow:'none',
              borderRadius:'0.4em',
              fontSize:'0.95rem',
              textTransform:'none',
              backgroundColor:'#1D5689',
              ":hover":{
                background:'#154066'

              }
            },
          },
        ],
      },
     
    },
  });
  
  export default theme;
  