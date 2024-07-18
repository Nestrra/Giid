import { Box,  Grid, InputAdornment, MenuItem, Typography } from '@mui/material'
import { InputGiid } from './components/inputs/InputGiid'
import { LoadingButton } from '@mui/lab'
//import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Form, Formik, } from 'formik';
import { validations } from './form/validation';
import { initialValues } from './form/initialValues';
import model from './form/model';
import { SelectGiid } from './components/selects/SelectGiid';
import { createActivity } from '../../api/activities';

import { handleOnChange } from '../../utils/handleOnchangeNumberFormat';
import { useDepartaments } from '../../hooks/useDepartaments';
import { Cities, Departament } from '../../interfaces/appInterface';
import { useCities } from '../../hooks/useCities';
import { useState } from 'react';




export const NewActivity = () => {
    const { formField } = model;
    const { departemants } = useDepartaments()
    
    const [departamentS, setdepartamentS] = useState<string>('')
    const { cities } = useCities()


    const newActivity = async (values: any, action: any) => {
        const resp = await createActivity(values)
        action.resetForm()
        console.log(resp)
    }


    const filterCity = (code:string)=>{

                if (cities !== undefined) {
                    
                    const filt = cities.filter((city:Cities)=>{
                        return city.code_departament === code
                    })
                   return filt
                }else{
                    return undefined
                }
           }


        //    const dep = (code:any)=>{

        //         console.log(code)

        //    }

    console.log(filterCity(departamentS) )
  

    return (


        <Formik
            initialValues={initialValues}
            validationSchema={validations.validationShema}
            onSubmit={newActivity}

        >
            {(props) => (

                <Form>
                    <Box >
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mt: { xs: 3, md: 1 } }} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}  >
                            <Typography fontSize={25} fontWeight={'medium'} color={'#5f5f5f'} > Actividades </Typography>
                            <LoadingButton type='submit' loading={false} variant='primary' > Guardar Actividad </LoadingButton>
                        </Box>
                        <Grid
                            sx={{ padding: { xs: 1.2, md: 3 } }}
                            mt={4}
                            borderRadius={3}
                            bgcolor={'white'}
                            container
                        >
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box >
                                    <InputGiid
                                        size='small'
                                        name={formField.title.name}
                                        label={formField.title.label}
                                    />

                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}

                                xs={12}
                                item
                            >
                                <Box  >
                                    <InputGiid
                                        setValues={props.setFieldValue}
                                        size='small'
                                        name={formField.price.name}
                                        label={formField.price.label}
                                        inputProps={{
                                            onBlur: (e: any) => handleOnChange(e, props, formField.price.name)
                                        }}
                                        inputPropsI={{
                                            startAdornment: (
                                                <InputAdornment position="start">$</InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box  >
                                    <InputGiid
                                        size='small'
                                        name={formField.description.name}
                                        label={formField.description.label}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box>
                                    <InputGiid

                                        size='small'
                                        name={formField.purpose.name}
                                        label={formField.purpose.label}
                                    />

                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box  >
                                    <InputGiid
                                        size='small'
                                        name={formField.duration.name}
                                        label={formField.duration.label}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box  >
                                    <InputGiid
                                        size='small'
                                        name={formField.includes.name}
                                        label={formField.includes.label}
                                    />
                                </Box>
                            </Grid>
                            <Grid
                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}
                                item
                            >
                                <Box  >
                                    <InputGiid
                                        size='small'
                                        name={formField.itinerary.name}
                                        label={formField.itinerary.label}
                                    />
                                </Box>
                            </Grid>
                            <Grid

                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}

                                item
                            >
                                <Box  >
                                    <InputGiid

                                        size='small'
                                        name={formField.recommendations.name}
                                        label={formField.recommendations.label}
                                    />
                                </Box>
                            </Grid>
                            <Grid

                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}

                                item
                            >
                                <Box  >
                                    <SelectGiid
                                        selectD={setdepartamentS}
                                        name={formField.departament.name}
                                        label={formField.departament.label}
                                    >
                                        {departemants != undefined ? departemants.map((departament: Departament) => {
                                           
                                            
                                            return (
                                            <MenuItem  key={departament.id}
                                                        value={departament.code}>
                                                            
                                                            {departament.name}
                                            </MenuItem>
                                            )
                                        }) : <>
                                            <MenuItem
                                                value='0'>cargando
                                            </MenuItem>
                                            <MenuItem
                                                value='0'>cargando
                                            </MenuItem>
                                        </>}

                                    </SelectGiid>

                                </Box>
                            </Grid>
                            <Grid

                                mb={2}
                                mr={1}
                                md={3.9}
                                xs={12}

                                item
                            >
                                <Box >

                                    <SelectGiid
                                        name={formField.city.name}
                                        label={formField.city.label}
                                    >
                                        {filterCity(departamentS) !== undefined ? filterCity(departamentS)!.map((city: Cities) => {

                                        

                                            return <MenuItem key={city.id}
                                                value={city.id}>{city.name}
                                            </MenuItem>

                                        }) : <>
                                            <MenuItem
                                                value='0'>cargando
                                            </MenuItem>
                                            <MenuItem
                                                value='0'>cargando
                                            </MenuItem>
                                        </>}
                                    </SelectGiid>
                                </Box>
                            </Grid>
                            <Grid

                                md={12}
                                xs={12}
                                item
                            >
                                <Typography> Imagen: </Typography>

                                {/* <Button
                                    startIcon={<CloudUploadIcon />}
                                    sx={{
                                        mt: 1
                                    }}
                                    variant="primary"
                                    component="label"
                                >
                                    Cargar imagen

                                    <input
                                        accept="image/png, image/jpeg"
                                        type="file"
                                        name='imagenes'
                                        hidden
                                        onChange={(e) => console.log(e)}
                                    />
                                </Button> */}
                            </Grid>
                            <Grid
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                md={4}
                                xs={12}
                                item
                            >
                                <LoadingButton type='submit' fullWidth loading={false} variant='primary' > Guardar Actividad
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Form>
            )}
        </Formik>
    )
}
