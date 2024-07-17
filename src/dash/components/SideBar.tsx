import { Drawer, useMediaQuery } from "@mui/material"
import { Content } from "./Content";

interface DrawerProps {

    container?: Element | (() => Element | null) | null | undefined
    mobileOpen?: boolean | undefined
    handleDrawerToggle: () => void;
    drawerWidth?: number
}
export const SideBar = ({ container, mobileOpen, handleDrawerToggle }: DrawerProps) => {


    const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

    return (
        <>
            {
                lgUp ?
                    <Drawer
                        container={container}
                        anchor="left"
                        open
                        PaperProps={{
                            sx: {
                               
                                borderColor: 'white',
                                backgroundColor: 'secondary.main',
                                color: 'common.white',
                                width: 280
                            }
                        }}
                        variant="permanent"
                    >


                        <Content />
                    </Drawer> :

                    <Drawer

                        anchor="left"
                        onClose={handleDrawerToggle}
                        open={mobileOpen}
                        PaperProps={{
                            sx: {

                                borderColor: 'secondary.main',
                                backgroundColor: 'secondary.main',
                                color: 'common.white',
                                width: 280
                            }
                        }}
                        variant="temporary"
                    >

                        <Content />

                    </Drawer>
            }

        </>


    )
}
