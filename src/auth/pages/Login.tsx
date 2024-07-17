import { Grid, Paper, Typography } from "@mui/material"
import { BoxLogin } from "./components/BoxLogin"
import { useState } from "react"
import { BoxResetPassword } from "./components/BoxResetPassword"


export const Login = () => {

  const [steep, setsteep] = useState(false)



  return (
    <Grid
      container
      component='main'
      sx={{ height: '100vh' }}
    >

      <Grid

        item
        xs={false}
        sm={4}
        md={7}
        //bgcolor={'#5e8c28'}
        // sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
          // backgroundImage: `url('https://app.xcapeturismo.com/web/img/img-login.jpg')`,
          // backgroundRepeat: 'no-repeat',
          // backgroundColor: (t) =>
          //   t.palette.mode === 'light' ? 'withe' : 'withe',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >

        <Typography sx={{ display:{xs:'none', md:'block'} }} variant="h1" color={'primary.main'} fontWeight={'bold'} fontSize={125}  >
            Giid
        </Typography>
      </Grid>
     
        <Grid  item xs={12} sm={6} md={5} component={Paper} elevation={2} square>

        {
          !steep ? 
          <BoxLogin
            setStepp={setsteep}
          /> : 
          <BoxResetPassword
          setStepp={setsteep}
          />
        }

          

        </Grid>
     
    </Grid>
  )
}
