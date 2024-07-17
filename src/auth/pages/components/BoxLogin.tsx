import { LoadingButton } from "@mui/lab"
import { Box, CircularProgress, Grid, Link, TextField, } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthLayout } from "../../layout/AuthLayout"


interface Props{

    steep?:boolean;
    setStepp: React.Dispatch<React.SetStateAction<boolean>>
   

}


export const BoxLogin = ({setStepp}:Props) => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    return (
        <AuthLayout
         title="Inicio de sesión"
        >
     
                <Box mb={2.3} width={'100%'} >
                    <TextField size='small' fullWidth placeholder="Usuario *" />
                </Box>
                <Box width={'100%'} mb={0.2} >
                    <TextField size='small' fullWidth placeholder="Contraseña *" />
                </Box>



                <Grid container mt={1} display={'flex'} justifyContent={'end'} >
                    <Grid item >
                        <Link onClick={() =>  setStepp(true)} sx={{ cursor: 'pointer', fontSize: 17, color: '#2F6FBA' }} variant="body2">
                        ¿Olvidaste tu contraseña?
                        </Link>
                    </Grid>
                    {/* <Grid item>
                            <Link onClick={() => { navigate('/registro'), dispatch(clearError()) }} sx={{ cursor: 'pointer', fontSize: 17, color: themePalette.GRAY }} variant="body2">
                                {"No tienes cuenta? Regístrate"}
                            </Link>
                        </Grid> */}
                </Grid>
                <Box
                    width={'100%'}
                    mt={3}
                    mb={2}
                >
                    <LoadingButton onClick={() => {
                        setLoading(true), setTimeout(() => {

                            navigate('/')
                        }, 1500)
                    }} loadingIndicator={<CircularProgress color='warning' size={16} />} loading={loading} fullWidth variant='primary' > Ingresar </LoadingButton>

                </Box>

                {/* <Copyright sx={{ mt: 5 }} /> */}
            
        </AuthLayout>


    )
}
