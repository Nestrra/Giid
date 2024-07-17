import { Box, Typography } from "@mui/material";




interface Props {

    children: JSX.Element[];
    title: string;
    subtitle?: string

}
export const AuthLayout = ({ children, title, subtitle = '' }: Props) => {


    return (
        <Box
            width={'100%'}
            height={'100vh'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box
                sx={{
                    borderRadius: 5,
                    paddingY: 3,
                    paddingX: 5,
                    boxShadow: " 0px 0px 5px 0px rgba(177, 177, 177, 0.48)",
                    display: 'flex',
                    width: { xs: '95%', md: '78%' },
                    flexDirection: 'column',

                }}

            >

                <Typography mt={2} fontSize={24} fontWeight={'700'} component="h1" variant="h4">
                    {title}
                </Typography>
                {
                    subtitle === ' ' ? null :
                        <Typography mb={3.5} >
                            {subtitle}
                        </Typography>
                }

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}

                >
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
