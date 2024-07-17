import { Box, Stack, Typography } from "@mui/material"
//import img from '../../assets/logo.png'
import { items } from "./data";
import { SideNavItem } from "./NavItems";
import { useLocation } from "react-router-dom";


export const Content = () => {

    const { pathname } = useLocation();
    return (
        <Box
            sx={{

                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >

            <Box
                display={'flex'} alignItems='center' justifyContent={'center'}
                sx={{
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 63.5
                }}
            >
                {/* <img height={32} className='logo' src={img} alt="logo" /> */}
                <Typography variant="h3" color={'primary.main'} fontWeight={'bold'} >Giid</Typography>

            </Box>
            <Box

                component="nav"
                sx={{
                    flexGrow: 1,
                    px: 2,
                    py: 3
                }}
            >
                <Stack
                    component="ul"
                    spacing={0.5}
                    sx={{
                        listStyle: 'none',
                        p: 0,
                        m: 0
                    }}
                >


                    { items.map((item, index) => {


                        const act = ()=>{
                            
                         
                            if (item.pages.length === 0 && pathname === item.path) {
                                
                                return true
                            }

                           return false
                           
                        }

                       

                        return (
                            <SideNavItem
                                pages={item.pages}
                                index={index}
                                pathname={pathname}
                                marginTop={0.5}
                                sesion={false}
                                active={act()}
                                disabled={false}
                                external={false}
                                icon={item.icon}
                                key={item.title}
                                path={item.path}
                                title={item.title}
                            />
                        );
                    })

                       
                    }
                  
                </Stack>
            </Box>

        </Box>
    )
}
