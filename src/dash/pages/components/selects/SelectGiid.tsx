

import { FormControl, FormHelperText, InputLabel,  Select } from '@mui/material'
import { useField } from 'formik';
import  { useEffect } from 'react'



interface SelectPropsX {

    children: JSX.Element[] | JSX.Element;
    value?:any;
    setValues?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
    label: string;
    name: string;
    onChange?:any
    selectD?:any
}


export const SelectGiid = ({ selectD, value, setValues, children, label, onChange, ...props }: SelectPropsX) => {

    const [filed, meta] = useField(props)

    useEffect(() => {
        setSel()
        estable()
      }, [value])
      useEffect(() => {
        setSel()
       
      }, [filed])
      const estable = ()=>{

        if (value !== undefined) {
         return setValues!(filed.name, value)
        }
    
      }

      const setSel = ()=>{
        if (filed.value !== '' && filed.name === 'departament') {
            selectD(filed.value)
        }
      }


    return (
        <div>
            <FormControl fullWidth size='small' error={meta.touched && meta.error ? true : false}  >

                <InputLabel> {label} </InputLabel>
                <Select
                    
                    {...filed}
                    {...props}
                    label={label}

                >
                    {
                        children
                    }

                </Select>
                <FormHelperText>{meta.touched && meta.error ? meta.error : ''} </FormHelperText>
              
            </FormControl>

        </div>
    )
}
