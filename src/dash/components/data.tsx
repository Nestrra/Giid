
import ArticleIcon from '@mui/icons-material/Article';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { SvgIcon } from '@mui/material';

export const items = [
    {
      title: 'Tablero',
      path: '/',
      icon: (
        <SvgIcon fontSize="small">
          <AppRegistrationOutlinedIcon />
        </SvgIcon>
      ),
      pages:[]
    },
    
    {
      title: 'Actividades',
      path: '/Actividades',
      icon: (
        <SvgIcon fontSize="small">
          <ArticleIcon />
        </SvgIcon>
      ),
      pages:[
        {
          name:'Lista',
          path: '/Actividades',

        },
        {
          name:'Nueva actividad',
          path: '/nueva-actividad',

        }
        
      ]
    },
   
  ];