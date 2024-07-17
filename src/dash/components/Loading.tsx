
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loading=()=> {
  return (
    <Box mt={30} justifyContent={'center'} alignItems={'center'} sx={{ display: 'flex' }}>
         <CircularProgress size={55} />
    </Box>
  );
}