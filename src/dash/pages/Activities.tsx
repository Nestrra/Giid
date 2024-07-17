import { LoadingButton } from "@mui/lab"
import { Box, Fade, Grid, IconButton, Menu, MenuItem, TextField, Typography } from "@mui/material"
import { useActivities } from "../../hooks/useActivities"
import SearchIcon from '@mui/icons-material/Search';
import { Activity } from '../../interfaces/appInterface';
import { Loading } from "../components/Loading";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Activities = () => {

    const { loading, activiteies } = useActivities()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [idActivity, setidActivity] = useState<string>('');
    const handleClick = ( id:string,  event: React.MouseEvent<HTMLElement>) => {
        setidActivity(id)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setidActivity('')
        setAnchorEl(null);
    };


    if (loading) {
        return (
            <Loading />
        )
    }

console.log(idActivity)


    return (
        <>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}  >
                <Typography fontSize={25} fontWeight={'medium'} color={'#5f5f5f'} > Actividades </Typography>
                <LoadingButton loading={false} variant='primary' > Guardar Actividad </LoadingButton>
            </Box>
            <Box borderRadius={2} padding={3} bgcolor={'white'} mt={4} >
                <Box>
                    <TextField
                        InputProps={{
                            startAdornment: <SearchIcon />,
                        }}
                        size='small'
                        sx={{ width: { xs: '100%', sm: 400, md: 500 } }}
                        placeholder="Buscar..."
                    />
                </Box>

                <Grid
                    border={1}
                    borderColor={'#ececec'}
                    mt={3}
                    container
                    padding={1.2}
                >
                    <Grid
                        md={3}
                        item
                    >
                        <Typography
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Nombre
                        </Typography>
                    </Grid>
                    <Grid
                        md={1}
                        item
                    >
                        <Typography
                            textAlign={'center'}
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Precio
                        </Typography>
                    </Grid>
                    <Grid
                        md={3}
                        item
                    >
                        <Typography
                            textAlign={'center'}
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Descripción
                        </Typography>
                    </Grid>
                    <Grid
                        md={2}
                        item
                    >
                        <Typography
                            textAlign={'center'}
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Duración
                        </Typography>
                    </Grid>
                    <Grid
                        md={1}
                        item
                    >
                        <Typography
                            textAlign={'center'}
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Publicada
                        </Typography>
                    </Grid>
                    <Grid
                        md={2}
                        item
                    >
                        <Typography
                            textAlign={'center'}
                            color='#666666'
                            fontWeight={'medium'}
                        >
                            Acción
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    border={1}
                    borderColor={'#ececec'}
                    container

                >

                    {

                        activiteies !== undefined ?

                            activiteies.map((activity: Activity) => {

                                return (
                                    <Grid
                                        borderBottom={1}
                                        borderColor={'#eaeaea'}
                                        key={activity.id}
                                        container
                                        paddingY={2}
                                        paddingX={1}

                                    >
                                        <Grid
                                            md={3}
                                            item
                                        >
                                            <Typography
                                                textAlign={'start'}
                                                color='#666666'
                                                noWrap

                                            >
                                                {activity.title}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            md={1}
                                            item
                                        >
                                            <Typography
                                                textAlign={'center'}
                                                color='#666666'

                                            >
                                                {activity.price}
                                            </Typography>
                                        </Grid>
                                        <Grid

                                            md={3}
                                            item
                                        >
                                            <Typography
                                                textAlign={'center'}
                                                noWrap
                                                color='#666666'

                                            >
                                                {activity.description}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            md={2}
                                            item
                                        >
                                            <Typography
                                                textAlign={'center'}
                                                noWrap
                                                color='#666666'

                                            >
                                                {activity.duration}
                                            </Typography>
                                        </Grid>
                                        <Grid

                                            md={1}
                                            item
                                        >
                                            <Typography
                                                textAlign={'center'}
                                                noWrap
                                                color='#666666'
                                            >
                                                {activity.status ? 'Activa' : 'Inactiva'}
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            display={'flex'}
                                            flexDirection={'row'}
                                            justifyContent={'center'}
                                            md={2}
                                            item
                                        >


                                            <IconButton
                                                onClick={ (e)=>handleClick(activity.id, e)}
                                                size='small'
                                                sx={{ borderRadius: 2, marginTop: -0.5, backgroundColor: '#DFEAF7' }} color='info' >
                                                <MoreVertIcon />
                                            </IconButton>

                                        </Grid>
                                    </Grid>)
                            })
                            : null
                    }
                    <Menu
                        PaperProps={{
                            style: {
                                marginRight: 15,
                                width: '12ch',
                            },
                        }}
                        sx={{ boxShadow: 0 }}
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem sx={{ fontSize: 14 }} onClick={()=>navigate(`/detalle-actividad/${idActivity}`)}><VisibilityIcon sx={{ marginRight: 1, fontSize: 15 }} /> Ver</MenuItem>
                        <MenuItem sx={{ fontSize: 14 }} onClick={handleClose}> <EditIcon sx={{ marginRight: 1, fontSize: 15 }} />  Editar</MenuItem>

                    </Menu>
                </Grid>
            </Box>
        </>
    )
}
