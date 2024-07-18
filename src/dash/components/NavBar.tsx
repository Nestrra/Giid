import { MenuOutlined } from "@mui/icons-material"
import { AppBar, Box, Grid, IconButton, Toolbar } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


interface NavProps {

    handleDrawerToggle: () => void;


}


const drawerWidth = 280;

export const NavBar = ({ handleDrawerToggle }: NavProps) => {

    return (
        <AppBar
            elevation={0}
            sx={{
                width: { lg: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: '#ffffff',
                border:1,
                borderTopWidth:0,
                borderLeftWidth:0,
                borderRightWidth:0,
                borderBlockColor:'#e8e6e6'
            }}
            position='fixed' >
            <Toolbar>
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems={'center'}
                >
                    <Box sx={{
                        display: { xs: 'none', md: 'block', sm: 'block' }
                            }}>

                    </Box>
                    <Box  >
                        {/* <TextField
                            InputProps={{
                                startAdornment: <SearchIcon />,
                            }}
                            size='small'
                            sx={{ width: { xs: '100%', sm: 400, md: 500 } }}
                            placeholder="Buscar..."
                        /> */}
                    </Box>
                    <Box>
                        <IconButton

                        >
                            <AccountCircleIcon color='primary' sx={{ fontSize: 35 }} />
                        </IconButton>
                    </Box>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
