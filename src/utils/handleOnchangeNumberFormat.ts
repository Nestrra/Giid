import { FormikProps } from "formik"
import numeral from "numeral"




export   const handleOnChange = (e: any, props: FormikProps<{[x: string]: string}>, name: string) => {
    props.setFieldValue(name, numeral(e.target.value).format('0,0.00'))

}