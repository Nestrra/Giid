import { Box, Toolbar,  styled } from "@mui/material";
import { useState } from "react";

import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { NavBar } from "../components";


//const drawerWidth = 240;

export const DashLayout = (props: any) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const SIDE_NAV_WIDTH = 280;
    const LayoutRoot = styled('div')(({ theme }) => ({
        display: 'flex',
        flex: '1 1 auto',
        maxWidth: '100%',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: SIDE_NAV_WIDTH
        }
    }));

    const LayoutContainer = styled('div')({
      
       backgroundColor:'rgb(255, 255, 255)',
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%'
    });

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <NavBar
                handleDrawerToggle={handleDrawerToggle}
            />
            <SideBar

                container={container}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />
            <LayoutRoot>
                <LayoutContainer
                >
                    <Toolbar />
                    <Box    
                                  
                        sx={{paddingX:{ xl:16  } , bgcolor:'#f2f2f2', width:'100%',padding:{ md:3, xs:0.7 } }}
                       
                    >
                        <Outlet />
                    </Box>
                </LayoutContainer>
            </LayoutRoot>

        </>
    )
}
