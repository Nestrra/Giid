import { Box, Button, TextField } from "@mui/material"
import { AuthLayout } from "../../layout/AuthLayout"



interface Props{

    steep?:boolean;
    setStepp: React.Dispatch<React.SetStateAction<boolean>>
   

}

export const BoxResetPassword = ({ setStepp }:Props) => {
 
    return (
        <AuthLayout
            title="¿Olvidaste tu contraseña?"
            subtitle="Ingresa el usuario de tu cuenta de Informa"
        >
            <Box mb={2} width={'100%'} >
                <TextField size='small' fullWidth placeholder="Usuario *" />
            </Box>
            <Box width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'end'} mb={2} mt={1.5} >
                <Box mr={3} >
                <Button onClick={()=>setStepp(false) } variant='secondary' >
                    Cancelar
                </Button>
                </Box>
               
                <Button variant='primary'>
                    Enviar
                </Button>
            </Box>
        </AuthLayout>
    )
}
